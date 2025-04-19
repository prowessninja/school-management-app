// screens/StandardsScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Card, Title, FAB } from 'react-native-paper';

const StandardsScreen = () => {
  const [standards, setStandards] = useState([
    { id: '1', name: 'Grade 1' },
    { id: '2', name: 'Grade 2' },
    { id: '3', name: 'Class 10' },
  ]);
  const [newStandard, setNewStandard] = useState('');
  const [showInput, setShowInput] = useState(false);

  const addStandard = () => {
    if (!newStandard.trim()) {
      Alert.alert('Please enter a standard name');
      return;
    }
    const newEntry = { id: Date.now().toString(), name: newStandard };
    setStandards([...standards, newEntry]);
    setNewStandard('');
    setShowInput(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={standards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {showInput && (
        <View style={styles.inputArea}>
          <TextInput
            label="New Standard"
            value={newStandard}
            onChangeText={setNewStandard}
            mode="outlined"
            style={styles.input}
          />
          <Button mode="contained" onPress={addStandard}>
            Add
          </Button>
        </View>
      )}

      <FAB
        icon={showInput ? 'close' : 'plus'}
        label={showInput ? 'Cancel' : 'Add Standard'}
        style={styles.fab}
        onPress={() => setShowInput(!showInput)}
      />
    </View>
  );
};

export default StandardsScreen;

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
