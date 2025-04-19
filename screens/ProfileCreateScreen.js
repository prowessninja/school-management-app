// screens/ProfileCreateScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import {
  TextInput,
  Button,
  Avatar,
  Title,
  HelperText,
} from 'react-native-paper';

const ProfileCreateScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null); // Placeholder for future image picker

  const handleSave = () => {
    if (!name || !email || !phone || !role || !password) {
      Alert.alert('Please fill all fields');
      return;
    }

    // You can send data to API or local storage here
    console.log({ name, email, phone, role, password });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Create Profile</Title>

      <View style={styles.avatarContainer}>
        <Avatar.Icon size={80} icon="account-plus" />
      </View>

      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        mode="outlined"
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        label="Role"
        value={role}
        onChangeText={setRole}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />
      <HelperText type="info">Profile image support coming soon</HelperText>

      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save
      </Button>
    </ScrollView>
  );
};

export default ProfileCreateScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
});
