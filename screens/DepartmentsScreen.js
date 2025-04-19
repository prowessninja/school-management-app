// screens/DepartmentsScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Card, Title, FAB } from 'react-native-paper';

const DepartmentsScreen = () => {
  const [departments, setDepartments] = useState([
    { id: '1', name: 'Science' },
    { id: '2', name: 'Mathematics' },
  ]);
  const [newDept, setNewDept] = useState('');
  const [showInput, setShowInput] = useState(false);

  const addDepartment = () => {
    if (!newDept.trim()) {
      Alert.alert('Please enter a department name');
      return;
    }
    const newEntry = { id: Date.now().toString(), name: newDept };
    setDepartments([...departments, newEntry]);
    setNewDept('');
    setShowInput(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={departments}
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
            label="New Department"
            value={newDept}
            onChangeText={setNewDept}
            mode="outlined"
            style={styles.input}
          />
          <Button mode="contained" onPress={addDepartment}>
            Add
          </Button>
        </View>
      )}

      <FAB
        icon={showInput ? 'close' : 'plus'}
        label={showInput ? 'Cancel' : 'Add Department'}
        style={styles.fab}
        onPress={() => setShowInput(!showInput)}
      />
    </View>
  );
};

export default DepartmentsScreen;

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
