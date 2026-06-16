import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

export default function DashboardScreen({ navigation, route }) {
  // Hardcoded initial data for clean minimal look
  const [activities, setActivities] = useState([
    { id: '1', type: 'Running', duration: '30 mins', calories: 300 },
    { id: '2', type: 'Cycling', duration: '45 mins', calories: 450 },
  ]);

  // Handle incoming new logs from LogActivityScreen
  React.useEffect(() => {
    if (route.params?.newActivity) {
      setActivities((prev) => [route.params.newActivity, ...prev]);
    }
  }, [route.params?.newActivity]);

  // Calculate totals
  const totalCalories = activities.reduce((sum, item) => sum + parseInt(item.calories || 0), 0);
  const calorieGoal = 2000;
  const progressPercentage = Math.min((totalCalories / calorieGoal) * 100, 100).toFixed(0);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fitness Tracker</Text>
        <Text style={styles.subHeader}>Track Your Daily Progress</Text>
      </View>

      {/* Visual Progress Card */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Calories Burned</Text>
        <Text style={styles.progressValue}>{totalCalories} / {calorieGoal} kcal</Text>
        
        {/* Custom Clean Progress Bar */}
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progressPercentage}%` }]} />
        </View>
        <Text style={styles.progressPercentageText}>{progressPercentage}% of daily goal reached</Text>
      </View>

      {/* Activity List Section */}
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        {activities.length === 0 ? (
          <Text style={styles.emptyText}>No activities logged today.</Text>
        ) : (
          <FlatList
            data={activities}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.activityItem}>
                <View>
                  <Text style={styles.activityType}>{item.type}</Text>
                  <Text style={styles.activityDuration}>{item.duration}</Text>
                </View>
                <Text style={styles.activityCalories}>+{item.calories} kcal</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      {/* Floating Action Button to Log Activity */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => navigation.navigate('LogActivity')}
        activeOpacity={0.8}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1C1E',
  },
  subHeader: {
    fontSize: 14,
    color: '#6C757D',
    marginTop: 4,
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  progressTitle: {
    fontSize: 16,
    color: '#495057',
    fontWeight: '500',
  },
  progressValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0D6EFD',
    marginVertical: 8,
  },
  progressBarBackground: {
    height: 12,
    backgroundColor: '#E9ECEF',
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#0D6EFD',
    borderRadius: 6,
  },
  progressPercentageText: {
    fontSize: 12,
    color: '#6C757D',
    textAlign: 'right',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 15,
  },
  activityItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#0D6EFD',
  },
  activityType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
  },
  activityDuration: {
    fontSize: 13,
    color: '#6C757D',
    marginTop: 2,
  },
  activityCalories: {
    fontSize: 16,
    fontWeight: '700',
    color: '#DC3545',
  },
  emptyText: {
    color: '#6C757D',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 14,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 30,
    backgroundColor: '#0D6EFD',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#0D6EFD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  fabText: {
    color: '#FFFFFF',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '300',
  },
});