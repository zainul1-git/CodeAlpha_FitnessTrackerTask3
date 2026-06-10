import React, { useState, useEffect } from 'react';
 import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

 function ManageCardScreen({ route, navigation }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const editTarget = route.params?.card; // Agar Home se card aaya to matlab Edit Mode hai

  useEffect(() => {
    if (editTarget) {
      setQuestion(editTarget.question);
      setAnswer(editTarget.answer);
    }
  }, [editTarget]);

  const saveData = async () => {
    if (!question.trim() || !answer.trim()) {
      Alert.alert("⚠️ Missing Input", "Please complete both the Question and Answer fields!");
      return;
    }

    try {
      const stored = await AsyncStorage.getItem('flashcards');
      let currentList = stored ? JSON.parse(stored) : [];

      if (editTarget) {
        
        currentList = currentList.map(item => 
          item.id === editTarget.id ? { ...item, question, answer } : item
        );
      } else {
        // CREATE LOGIC
        const newFlashcard = {
          id: Date.now().toString(), // Dynamic Unique ID
          question: question.trim(),
          answer: answer.trim()
        };
        currentList.push(newFlashcard);
      }

      await AsyncStorage.setItem('flashcards', JSON.stringify(currentList));
      navigation.goBack(); 
    } catch (err) {
      console.log("Error writing data:", err);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.label}>Question</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g., What is the capital of France?"
          placeholderTextColor="#A0AEC0"
          multiline
          value={question}
          onChangeText={setQuestion}
        />

        <Text style={styles.label}>Answer</Text>
        <TextInput
          style={[styles.textInput, styles.largeInput]}
          placeholder="e.g., Paris"
          placeholderTextColor="#A0AEC0"
          multiline
          value={answer}
          onChangeText={setAnswer}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={saveData}>
          <Text style={styles.submitBtnText}>
            {editTarget ? "💾 Update Flashcard" : "✨ Save Flashcard"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ManageCardScreen;

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#F4F6F9' },
  container: { padding: 24 },
  label: { fontSize: 14, fontWeight: '700', color: '#4A5568', marginBottom: 8, marginTop: 16 },
  textInput: { backgroundColor: '#FFF', borderRadius: 14, padding: 16, fontSize: 16, color: '#1A202C', minHeight: 90, textAlignVertical: 'top', borderWidth: 1, borderColor: '#E2E8F0' },
  largeInput: { minHeight: 130 },
  submitBtn: { backgroundColor: '#6BCB77', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 36, shadowColor: '#6BCB77', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 5, elevation: 3 },
  submitBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});