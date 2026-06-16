import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';


const QUOTES_DATA = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" }
];

export default function QuoteScreen() {
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES_DATA.length);
    setCurrentQuote(QUOTES_DATA[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daily Quotes</Text>
      </View>

      {/* Quote Card Display */}
      <View style={styles.quoteCard}>
        <Text style={styles.quoteSymbol}>“</Text>
        <Text style={styles.quoteText}>{currentQuote.text}</Text>
        <Text style={styles.authorText}>— {currentQuote.author}</Text>
      </View>

      {/* Action Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={getRandomQuote} activeOpacity={0.8}>
          <Text style={styles.buttonText}>New Quote</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC', 
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1A1C1E',
    letterSpacing: 0.5,
  },
  quoteCard: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginVertical: 40,
  },
  quoteSymbol: {
    fontSize: 80,
    color: '#007AFF', // Clean modern blue accent
    fontWeight: 'bold',
    lineHeight: 80,
    marginBottom: -20,
  },
  quoteText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#2C3E50',
    lineHeight: 34,
    marginBottom: 15,
  },
  authorText: {
    fontSize: 16,
    color: '#7F8C8D',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  buttonContainer: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});