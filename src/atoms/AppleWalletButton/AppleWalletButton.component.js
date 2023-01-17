import {View, Text, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  AddPassButton,
  ADD_PASS_BUTTON_CONSTANTS,
} from 'react-native-wallet-passes';
import PropTypes from 'prop-types';
// import NavigationServices from '_navigations/NavigationServices';
// import Scenes from '_navigations/Scenes';
// import { retrieveSecureData, storageKeys } from '_utils/localStorage';

// const AppleWallet = NativeModules.AppleWallet;
// const AppleWalletEventEmitter = new NativeEventEmitter(AppleWallet);

import styles from './AppleWalletButton.style';

const AppleWalletButton = props => {
  const {overrideStyle, overrideButtonStyle} = props;
  const {appleWalletButton} = styles();
  //     const cardDetails = useSelector((state) => state?.selectedCardData?.cardData);
  //   const storeDispatch = useDispatch();

  //   const [canAddPaymentPassToWallet, setCanAddPaymentPassToWallet] =
  //     useState(false);
  //   const [isEligible, setIsEligible] = useState(false);
  //   const setWalletListener = async () => {
  //     const userData = await retrieveSecureData(storageKeys.userDetails);
  //     const nid = JSON.parse(userData).nationalId;
  //     const addToWalletData = {
  //       cardholderName: cardDetails?.selectedCard?.embossingName,
  //       primaryAccountSuffix: cardDetails?.selectedCard?.maskedPan?.split('_')[1],
  //       localizedDescription: 'CARD',
  //       paymentNetwork: 'VISA',
  //       encryptionScheme: 'RSA_V2',
  //       primaryAccountIdentifier: '',
  //     };
  //     AppleWallet.startAddPaymentPass(addToWalletData)
  //       .then((data) => {
  //         const dataToServer = {
  //           cardId: cardDetails?.selectedCard?.cardId,
  //           certificates: [data.certificateLeaf, data.certificateSubCA],
  //           nonce: data.nonce,
  //           nonceSignature: data.nonceSignature,
  //           networkName: 'visa',
  //           customerId: nid,
  //           accountId: cardDetails?.accountNumber,
  //         };
  //         completeProvisionning(dataToServer);
  //       })
  //       .catch((e) => {
  //         showAlertDialog('', handleApiError(e));
  //       });
  //   };
  //   const actionSheetRef = React.useRef();
  //   const completeProvisionning = (parameters) => {
  //     appleProvisioning(parameters)
  //       .then((result) => {
  //         return AppleWallet.completeAddPaymentPass({
  //           wrappedKey: result.wrappedKey,
  //           encryptedPassData: result.encryptedPassData,
  //           activationData: result.activationCode,
  //         }).then((success) => {
  //           if (!success) {
  //             throw Error('failed to add to card');
  //           }
  //           storeDispatch(setStoreCardDetailsAddedToWallet(success));
  //           eligibilityCheck();
  //           NavigationServices.navigate(Scenes.addToAppleWalletResponse, {
  //             responseType: 'success',
  //           });
  //         });
  //       })
  //       .catch((e) => {
  //         NavigationServices.navigate(Scenes.addToAppleWalletResponse, {
  //           responseType: 'fail',
  //         });
  //       });
  //   };

  //   const checkAddedToWallet = async (cardData) => {
  //     let result = false;
  //     if (Platform.OS === 'ios') {
  //       const canAddPaymentPass = await AppleWallet.canAddPaymentPass();
  //       setCanAddPaymentPassToWallet(canAddPaymentPass);
  //       if (canAddPaymentPass) {
  //         const response = await AppleWallet.eligibilityAddingToWallet(cardData);
  //         if (
  //           (response.Watch === 'False' && response.WatchConnected === 'TRUE') ||
  //           response.Wallet === 'False'
  //         ) {
  //           result = true;
  //         }
  //       }
  //     }
  //     return result;
  //   };

  //   const eligibilityCheck = React.useCallback(() => {
  //     const walletData = [
  //       {
  //         cardholderName: cardDetails?.selectedCard?.embossingName,
  //         primaryAccountNumberSuffix:
  //           cardDetails?.selectedCard?.maskedPan?.split('_')[1],
  //         localizedDescription: 'CARD',
  //         paymentNetwork: 'VISA',
  //       },
  //     ];
  //     checkAddedToWallet(walletData).then((isNotAdded) => {
  //       if (isNotAdded && props.asModel) {
  //         actionSheetRef.current?.open();
  //       }
  //       setIsEligible(isNotAdded);
  //     });
  //   }, [
  //     cardDetails?.selectedCard?.embossingName,
  //     cardDetails?.selectedCard?.maskedPan,
  //     props.asModel,
  //   ]);

  //   useEffect(() => {
  //     eligibilityCheck();
  //     if (Platform.OS === 'ios') {
  //       const AppleWalletEventLisnter = AppleWalletEventEmitter.addListener(
  //         'addPassError',
  //         (e) => {
  //           NavigationServices.navigate(Scenes.addToAppleWalletResponse, {
  //             responseType: 'fail',
  //           });
  //         },
  //       );
  //       return () => {
  //         AppleWalletEventLisnter.remove();
  //       };
  //     }
  //   }, [
  //     cardDetails?.selectedCard?.maskedPan,
  //     cardDetails?.isAddedToWallet,
  //     props.asModel,
  //     canAddPaymentPassToWallet,
  //     eligibilityCheck,
  //   ]);

  return (
    <View style={overrideStyle}>
      <AddPassButton
        style={[appleWalletButton, overrideButtonStyle]}
        addPassButtonStyle={ADD_PASS_BUTTON_CONSTANTS.STYLE.BLACK_OUTLINE}
        onPress={() => {
          console.log('onPress');
        }}
      />
    </View>
  );
};

AppleWalletButton.propTypes = {
  overrideStyle: PropTypes.object,
  overrideButtonStyle: PropTypes.object,
};

export default AppleWalletButton;
