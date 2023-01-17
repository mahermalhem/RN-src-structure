import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import styles from './CustomAcitivityIndicator.style';
import PropTyes from 'prop-types';

const CustomActivityIndicator = props => {
  const {overrideStyle} = props;
  const {loaderStyle} = styles();
  return (
    <AnimatedLottieView
      source={require('_assets/animations/loading.json')}
      style={[loaderStyle, overrideStyle]}
      autoPlay
      loop
    />
  );
};

CustomActivityIndicator.propTypes = {
  overrideStyle: PropTyes.object,
};

export default CustomActivityIndicator;
