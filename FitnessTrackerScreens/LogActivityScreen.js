import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

export default function LogActivityScreen({ navigation }) {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleSave = () => {
    if (!type || !duration || !calories) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newActivity = {
      id: Math.random().toString(),
      type,
      duration: `${duration} mins`,
      calories: parseInt(calories),
    };

    // Pass data back to Dashboard and go back
    navigation.navigate('Dashboard', { newActivity });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Log Activity</Text>
      </View>

      {/* Form Fields */}
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Activity Type</Text>
          <TextInput 
            style={styles.input} 
            placeholder="e.g., Walking, Weightlifting" 
            value={type}
            onChangeText={setType}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Duration (in minutes)</Text>
          <TextInput 
            style={styles.input} 
            placeholder="e.g., 30" 
            keyboardType="number-pad"
            value={duration}
            onChangeText={setDuration}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Calories Burned (kcal)</Text>
          <TextInput 
            style={styles.input} 
            placeholder="e.g., 250" 
            keyboardType="number-pad"
            value={calories}
            onChangeText={setCalories}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.button} onPress={handleSave} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Save Activity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    fontSize: 16,
    color: '#0D6EFD',
    fontWeight: '600',
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1C1E',
  },
  form: {
    paddingHorizontal: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#495057',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#212529',
  },
  button: {
    backgroundColor: '#0D6EFD',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});