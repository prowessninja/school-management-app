// screens/ProfileViewScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';

const ProfileViewScreen = ({ navigation }) => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    role: 'Administrator',
    image: null, // Replace with image URI if available
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.profileHeader}>
          <Avatar.Icon size={80} icon="account" />
          <View style={styles.info}>
            <Title>{user.name}</Title>
            <Paragraph>{user.email}</Paragraph>
            <Paragraph>{user.phone}</Paragraph>
            <Paragraph>{user.role}</Paragraph>
          </View>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button mode="outlined" onPress={() => navigation.navigate('ProfileCreate')}>
            Edit Profile
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ProfileViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  card: {
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 16,
  },
  actions: {
    justifyContent: 'flex-end',
    marginTop: 16,
  },
});
