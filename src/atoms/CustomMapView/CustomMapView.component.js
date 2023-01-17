import React, {useState, useCallback, useEffect, useRef} from 'react';
import {Dimensions, Linking, View} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import PropTypes from 'prop-types';

import styles from './CustomMapView.style';
import {CheckLocationPermission} from '_utils/permissions';
import {useTheme} from '_styles/theming';
import {CustomBottomModalAlert} from '_molecules';
import {translate} from '_locales/i18n';
import {openAlertBottomSheetModal} from '../BottomSheet/AlertBottomSheet.component';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const CustomMapView = props => {
  const {
    coordinates,
    showCurrentLocation,
    markers,
    onLocationSelection,
    overrideStyle,
    onFailPermission,
    markerIcon,
  } = props;

  const mapRef = useRef();

  const [permission, setPermission] = useState(null);
  const [currentCoordinates, setCurrentCoordinates] = useState(null);
  const theme = useTheme();

  const {map} = styles(theme);

  const getLocation = useCallback(() => {
    showCurrentLocation &&
      Geolocation.getCurrentPosition(
        position => {
          setCurrentCoordinates(position.coords);
          onLocationSelection(position.coords);
        },
        error => {
          // See error code charts below.
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
  }, [onLocationSelection, showCurrentLocation]);

  useEffect(() => {
    CheckLocationPermission.then(response => {
      setPermission(response);
      response === 'granted' ? getLocation() : onFailPermission();
    });
  }, [getLocation, onFailPermission]);

  const moveMarker = useCallback(data => {
    const markerPosition = {
      latitude: data?.latitude ? parseFloat(data?.latitude) : 0,
      longitude: data?.longitude ? parseFloat(data?.longitude) : 0,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    mapRef &&
      mapRef.current &&
      mapRef.current.animateToRegion(markerPosition, 1000);
  }, []);

  useEffect(() => {
    moveMarker(coordinates);
  }, [coordinates, moveMarker]);

  return (
    <>
      {permission === 'granted' ? (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={[map, overrideStyle]}
          onPress={coord => {
            setCurrentCoordinates(coord.nativeEvent.coordinate);
            onLocationSelection(coord.nativeEvent.coordinate);
          }}
          region={{
            latitude: !showCurrentLocation
              ? coordinates.latitude
              : currentCoordinates?.latitude,
            longitude: !showCurrentLocation
              ? coordinates.longitude
              : currentCoordinates?.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>
          {showCurrentLocation && (
            <Marker
              draggable
              onDragEnd={position => {
                onLocationSelection(position.nativeEvent.coordinate);
              }}
              coordinate={{
                latitude: currentCoordinates?.latitude,
                longitude: currentCoordinates?.longitude,
              }}
            />
          )}
          {markers?.map((value, index) => {
            let coord = {
              latitude: value.location.latitude,
              longitude: value.location.longitude,
            };
            return (
              <Marker
                key={index}
                coordinate={coord}
                title={value.desc ? value.desc : null}
                description={
                  value.price ? value.price + ' ' + value.currency : null
                }
                image={markerIcon}
                onPress={() => {
                  onLocationSelection(coord);
                  moveMarker(coord);
                }}
              />
            );
          })}
        </MapView>
      ) : (
        <>
          <View style={map} />
          {(permission === 'blocked' ||
            permission === 'unavailable' ||
            permission === 'denied') &&
            openAlertBottomSheetModal(
              <CustomBottomModalAlert
                type={'error'}
                title={translate('permissions.oops')}
                description={translate('permissions.location.blocked')}
                actionMessage={translate('permissions.location.goTosettings')}
                actionTitle={translate('common.yes')}
                action={Linking.openSettings}
              />,
            )}
        </>
      )}
    </>
  );
};

CustomMapView.propTypes = {
  coordinates: PropTypes.objectOf(PropTypes.number, PropTypes.number),
  showCurrentLocation: PropTypes.bool,
  markers: PropTypes.array,
  onLocationSelection: PropTypes.func,
  overrideStyle: PropTypes.object,
  onFailPermission: PropTypes.func,
  markerIcon: PropTypes.number,
};

CustomMapView.defaultProps = {
  coordinates: {
    latitude: 21.559536,
    longitude: 39.1251496,
  },
  showCurrentLocation: false,
  markers: null,
  onLocationSelection: () => {},
  onFailPermission: () => {},
  overrideStyle: null,
  markerIcon: null,
};

export default CustomMapView;
