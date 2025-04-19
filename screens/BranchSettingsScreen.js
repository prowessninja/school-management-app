// screens/BranchSettingsScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Title, Chip, HelperText } from 'react-native-paper';

const sampleStandards = ['Grade 1', 'Grade 2', 'Class 10'];
const sampleDepartments = ['Science', 'Mathematics', 'Commerce'];
const sampleLocations = ['Hyderabad', 'Vijayawada', 'Chennai'];

const BranchSettingsScreen = () => {
  const [branchName, setBranchName] = useState('');
  const [location, setLocation] = useState('');
  const [standards, setStandards] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [contact, setContact] = useState('');
  const [workingHours, setWorkingHours] = useState('');

  const toggleChip = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleSave = () => {
    if (!branchName || !location) {
      Alert.alert('Branch name and location are required');
      return;
    }

    const branchData = {
      branchName,
      location,
      standards,
      departments,
      contact,
      workingHours,
    };

    console.log('Branch Settings:', branchData);
    Alert.alert('Settings saved successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Branch Settings</Title>

      <TextInput
        label="Branch Name"
        mode="outlined"
        value={branchName}
        onChangeText={setBranchName}
        style={styles.input}
      />

      <TextInput
        label="Location"
        mode="outlined"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      <Title style={styles.sectionTitle}>Select Available Standards</Title>
      <View style={styles.chipGroup}>
        {sampleStandards.map((std) => (
          <Chip
            key={std}
            mode="outlined"
            selected={standards.includes(std)}
            onPress={() => toggleChip(std, standards, setStandards)}
            style={styles.chip}
          >
            {std}
          </Chip>
        ))}
      </View>

      <Title style={styles.sectionTitle}>Select Available Departments</Title>
      <View style={styles.chipGroup}>
        {sampleDepartments.map((dep) => (
          <Chip
            key={dep}
            mode="outlined"
            selected={departments.includes(dep)}
            onPress={() => toggleChip(dep, departments, setDepartments)}
            style={styles.chip}
          >
            {dep}
          </Chip>
        ))}
      </View>

      <TextInput
        label="Working Hours (e.g., 9:00 AM - 5:00 PM)"
        mode="outlined"
        value={workingHours}
        onChangeText={setWorkingHours}
        style={styles.input}
      />

      <TextInput
        label="Contact Info"
        mode="outlined"
        value={contact}
        onChangeText={setContact}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
        Save Branch Settings
      </Button>
    </ScrollView>
  );
};

export default BranchSettingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 20,
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  input: {
    marginBottom: 15,
  },
  saveButton: {
    marginTop: 30,
  },
});
