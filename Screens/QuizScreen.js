import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

 function QuizScreen({ route }) {
  const { cards } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false); // hide answer if go to front card
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false); // hide answer if go to previous card
    }
  };

  const currentCard = cards[currentIndex];

  return (
    <View style={styles.container}>
      {/* Top Progress Bar */}
      <Text style={styles.progressText}>Card {currentIndex + 1} of {cards.length}</Text>
      
      {/* Flashcard Box */}
      <View style={styles.flashcardContainer}>
        <View style={[styles.mainCard, showAnswer ? styles.cardBack : styles.cardFront]}>
          {!showAnswer ? (
            <View style={styles.cardContent}>
              <Text style={styles.sideLabel}>❓ QUESTION</Text>
              <Text style={styles.bodyText}>{currentCard?.question}</Text>
            </View>
          ) : (
            <View style={styles.cardContent}>
              <Text style={[styles.sideLabel, { color: '#6BCB77' }]}>💡 ANSWER</Text>
              <Text style={styles.bodyText}>{currentCard?.answer}</Text>
            </View>
          )}
        </View>

        
        <TouchableOpacity style={styles.toggleBtn} onPress={() => setShowAnswer(!showAnswer)}>
          <Text style={styles.toggleBtnText}>
            {showAnswer ? "🔄 Show Question" : "👁️ Show Answer"}
          </Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.navRow}>
        <TouchableOpacity 
          style={[styles.navBtn, currentIndex === 0 && styles.disabledNav]} 
          disabled={currentIndex === 0} 
          onPress={handlePrev}
        >
          <Text style={styles.navBtnText}>⬅️ Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navBtn, currentIndex === cards.length - 1 && styles.disabledNav]} 
          disabled={currentIndex === cards.length - 1} 
          onPress={handleNext}
        >
          <Text style={styles.navBtnText}>Next ➡️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default QuizScreen;


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9', padding: 24, justifyContent: 'space-between' },
  progressText: { textAlign: 'center', fontSize: 15, fontWeight: '600', color: '#718096', marginTop: 8 },
  flashcardContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  mainCard: { width: '100%', minHeight: 280, borderRadius: 24, padding: 24, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 4 },
  cardFront: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E2E8F0' },
  cardBack: { backgroundColor: '#F8FFF9', borderWidth: 2, borderColor: '#6BCB77' },
  cardContent: { alignItems: 'center', width: '100%' },
  sideLabel: { fontSize: 12, fontWeight: '800', color: '#4D96FF', letterSpacing: 2, marginBottom: 20 },
  bodyText: { fontSize: 20, fontWeight: '600', color: '#2D3748', textAlign: 'center', lineHeight: 30, paddingHorizontal: 10 },
  toggleBtn: { marginTop: 28, backgroundColor: '#E2E8F0', paddingVertical: 12, paddingHorizontal: 28, borderRadius: 30 },
  toggleBtnText: { color: '#4A5568', fontWeight: '700', fontSize: 14 },
  navRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  navBtn: { backgroundColor: '#4D96FF', paddingVertical: 16, borderRadius: 16, flex: 0.47, alignItems: 'center', shadowColor: '#4D96FF', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 3 },
  disabledNav: { backgroundColor: '#CBD5E0', elevation: 0, shadowOpacity: 0 },
  navBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});