// screens/PermissionsScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Button, Text, Switch, Divider, Menu } from 'react-native-paper';

const roles = ['Admin', 'Teacher', 'Accountant', 'Student', 'HOD'];

const defaultPermissions = {
  viewDashboard: false,
  manageFees: false,
  manageStationery: false,
  manageDepartments: false,
  manageStandards: false,
  viewReports: false,
  editProfile: false,
};

const PermissionsScreen = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [permissions, setPermissions] = useState({ ...defaultPermissions });
  const [menuVisible, setMenuVisible] = useState(false);

  const handleTogglePermission = (key) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setPermissions({ ...defaultPermissions }); // Reset or load saved config
    setMenuVisible(false);
  };

  const handleSave = () => {
    console.log('Permissions saved for:', selectedRole, permissions);
    alert('Permissions saved!');
  };

  const renderPermissionToggle = (label, key) => (
    <View style={styles.permissionItem} key={key}>
      <Text>{label}</Text>
      <Switch value={permissions[key]} onValueChange={() => handleTogglePermission(key)} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={{ marginBottom: 10 }}>Role-Based Permissions</Title>

      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Button mode="outlined" onPress={() => setMenuVisible(true)}>
            {selectedRole ? selectedRole : 'Select Role'}
          </Button>
        }
      >
        {roles.map((role) => (
          <Menu.Item key={role} onPress={() => handleRoleSelect(role)} title={role} />
        ))}
      </Menu>

      {selectedRole ? (
        <View style={{ marginTop: 20 }}>
          <Divider style={{ marginBottom: 10 }} />
          {renderPermissionToggle('View Dashboard', 'viewDashboard')}
          {renderPermissionToggle('Manage Fees', 'manageFees')}
          {renderPermissionToggle('Manage Stationery', 'manageStationery')}
          {renderPermissionToggle('Manage Departments', 'manageDepartments')}
          {renderPermissionToggle('Manage Standards', 'manageStandards')}
          {renderPermissionToggle('View Reports', 'viewReports')}
          {renderPermissionToggle('Edit Profile', 'editProfile')}
          <Button mode="contained" style={{ marginTop: 20 }} onPress={handleSave}>
            Save Permissions
          </Button>
        </View>
      ) : (
        <Text style={{ marginTop: 20, color: 'gray' }}>Please select a role to configure permissions.</Text>
      )}
    </ScrollView>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  permissionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
