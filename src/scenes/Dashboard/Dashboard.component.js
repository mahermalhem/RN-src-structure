import {View, Text, Button} from 'react-native';
import React from 'react';
import NavigationServices from '_navigations/NavigationServices';
import StackNames from '_navigations/StackNames';
import {translate} from '_locales/i18n';

const Dashboard = () => {
  return (
    <View>
      <Text>{translate('dashboard.dashboardTitle')}</Text>
      <Button
        title="Go to splash"
        onPress={() =>
          NavigationServices.navigateToStack(StackNames.splashStack)
        }
      />
    </View>
  );
};

export default Dashboard;
