// screens/LocationsScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';

const LocationsScreen = () => {
  const [locations, setLocations] = useState([
    { id: '1', location: 'Hyderabad', branch: 'Main Campus' },
    { id: '2', location: 'Vijayawada', branch: 'Junior Wing' },
  ]);
  const [locationName, setLocationName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addLocation = () => {
    if (!locationName.trim() || !branchName.trim()) {
      Alert.alert('Please fill both Location and Branch Name');
      return;
    }
    const newEntry = {
      id: Date.now().toString(),
      location: locationName,
      branch: branchName,
    };
    setLocations([...locations, newEntry]);
    setLocationName('');
    setBranchName('');
    setShowForm(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.branch}</Title>
              <Paragraph>{item.location}</Paragraph>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {showForm && (
        <View style={styles.inputArea}>
          <TextInput
            label="Location Name"
            mode="outlined"
            value={locationName}
            onChangeText={setLocationName}
            style={styles.input}
          />
          <TextInput
            label="Branch Name"
            mode="outlined"
            value={branchName}
            onChangeText={setBranchName}
            style={styles.input}
          />
          <Button mode="contained" onPress={addLocation}>
            Add Location
          </Button>
        </View>
      )}

      <FAB
        icon={showForm ? 'close' : 'plus'}
        label={showForm ? 'Cancel' : 'Add Location'}
        style={styles.fab}
        onPress={() => setShowForm(!showForm)}
      />
    </View>
  );
};

export default LocationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  inputArea: {
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
  },
});
