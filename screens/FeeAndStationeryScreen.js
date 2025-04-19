// screens/FeeAndStationeryScreen.js
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button, FAB } from 'react-native-paper';

const mockData = [
  { id: '1', type: 'Tuition Fee', amount: '₹30,000' },
  { id: '2', type: 'Books', amount: '₹5,000' },
  { id: '3', type: 'Uniform', amount: '₹2,000' },
];

const FeeAndStationeryScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.type}</Title>
        <Paragraph>{item.amount}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        label="Add New"
        onPress={() => console.log('Add new fee/stationery item')}
      />
    </View>
  );
};

export default FeeAndStationeryScreen;

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
});
