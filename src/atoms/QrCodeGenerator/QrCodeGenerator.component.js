import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';

import RNQRGenerator from 'rn-qr-generator';
import PropTypes from 'prop-types';

const QrCodeGenerator = props => {
  const {value, size} = props;

  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    const generateQR = async () => {
      const response = await RNQRGenerator.generate({
        value: value,
        height: size,
        width: size,
        backgroundColor: 'transparent',
      });
      const {uri} = response;
      setImageSource(uri);
    };

    value && generateQR();
  }, [value, size]);

  return imageSource ? (
    <Image source={{uri: imageSource}} style={{width: size, height: size}} />
  ) : null;
};

QrCodeGenerator.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default QrCodeGenerator;
