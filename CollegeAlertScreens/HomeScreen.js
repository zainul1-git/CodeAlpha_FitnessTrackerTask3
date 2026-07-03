// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ALERTS_DATA } from '../Data/AlertsData';

export default function HomeScreen({ navigation }) {
  
  // Badge color according to severity
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return '#FF3B30';
      case 'Medium': return '#FF9500';
      default: return '#34C759';
    }
  };

  const renderAlertItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('AlertDetail', { alert: item })}
    >
      <View style={styles.cardHeader}>
        <Text style={[styles.category, { color: getSeverityColor(item.severity) }]}>
          {item.category}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription} numberOfLines={2}>
        {item.description}
      </Text>
      
      <View style={styles.cardFooter}>
        <Text style={styles.venueText}>📍 {item.venue}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ALERTS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderAlertItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  date: {
    fontSize: 12,
    color: '#8E8E93',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#636366',
    lineHeight: 20,
    marginBottom: 10,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
    paddingTop: 8,
    marginTop: 4,
  },
  venueText: {
    fontSize: 13,
    color: '#3A3A3C',
    fontWeight: '500',
  },
});