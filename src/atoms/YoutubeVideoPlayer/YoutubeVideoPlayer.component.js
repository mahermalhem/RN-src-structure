import {View, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';

import YoutubePlayer from 'react-native-youtube-iframe';
import PropTypes from 'prop-types';

import styles from './YoutubeVideoPlayer.style';
import {verticalScale} from '_styles/scaling';

const VIDEO_HEIGHT =
  Platform.OS === 'ios' ? verticalScale(190) : verticalScale(200);

const YoutubeVideoPlayer = props => {
  const {videoId} = props;
  const {videoContainer, webViewStyle} = styles;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={videoContainer}>
      <YoutubePlayer
        height={VIDEO_HEIGHT}
        contentScale={1}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
        webViewStyle={webViewStyle}
      />
    </View>
  );
};

YoutubeVideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

YoutubeVideoPlayer.defaultProps = {
  videoId: 'DCpTDvEjbIc',
};

export default YoutubeVideoPlayer;
