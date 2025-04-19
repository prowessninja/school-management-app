// navigation/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from '../screens/LoginScreen';
import ProfileViewScreen from '../screens/ProfileViewScreen';
import ProfileCreateScreen from '../screens/ProfileCreateScreen';
import DashboardScreen from '../screens/DashboardScreen';
import FeeAndStationeryScreen from '../screens/FeeAndStationeryScreen';
import DepartmentsScreen from '../screens/DepartmentsScreen';
import StandardsScreen from '../screens/StandardsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import PermissionsScreen from '../screens/PermissionsScreen';
import BranchSettingsScreen from '../screens/BranchSettingsScreen';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Dashboard">
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Branch Settings" component={BranchSettingsScreen} />
          <Drawer.Screen name="Permissions" component={PermissionsScreen} />
          <Drawer.Screen name="Locations" component={LocationsScreen} />
          <Drawer.Screen name="Standards" component={StandardsScreen} />
          <Drawer.Screen name="Departments" component={DepartmentsScreen} />
          <Drawer.Screen name="Profile View" component={ProfileViewScreen} />
          <Drawer.Screen name="Profile Create" component={ProfileCreateScreen} />
          <Drawer.Screen name="Fee and Stationery" component={FeeAndStationeryScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
