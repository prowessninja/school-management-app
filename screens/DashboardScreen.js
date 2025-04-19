// screens/DashboardScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
// ← use Expo’s vector icons, not react-native-vector-icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const stats = [
  { title: 'Total Students', value: '1200', icon: 'account-group' },
  { title: 'Pending Fees',    value: '₹ 2.5L', icon: 'cash' },
  { title: 'Teachers',         value: '85',     icon: 'account-tie' },
  { title: 'Branches',         value: '5',      icon: 'office-building' },
];

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      {stats.map((stat, i) => (
        <Card key={i} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            {/** icon might still fail silently, but this import is correct */}
            <MaterialCommunityIcons 
              name={stat.icon} 
              size={32} 
              color="#6200ee" 
              style={styles.icon} 
            />
            <View>
              <Title>{stat.title}</Title>
              <Paragraph>{stat.value}</Paragraph>
            </View>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '48%',
    marginVertical: 8,
    elevation: 2,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
});
