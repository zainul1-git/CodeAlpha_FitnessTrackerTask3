import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

 function HomeScreen({ navigation }) {
  const [flashcards, setFlashcards] = useState([]);
  const isFocused = useIsFocused();


  useEffect(() => {
    if (isFocused) {
      loadCards();
    }
  }, [isFocused]);

  const loadCards = async () => {
    try {
      const storedCards = await AsyncStorage.getItem('flashcards');
      if (storedCards) {
        setFlashcards(JSON.parse(storedCards));
      }
    } catch (error) {
      console.log("Error loading cards:", error);
    }
  };

  const deleteCard = async (id) => {
    Alert.alert("🚨 Delete Flashcard", "Do you want to permanently delete this card?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Yes, Delete",
        style: "destructive",
        onPress: async () => {
          const updatedCards = flashcards.filter(card => card.id !== id);
          setFlashcards(updatedCards);
          await AsyncStorage.setItem('flashcards', JSON.stringify(updatedCards));
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerStats}>
        <Text style={styles.statsText}>Total Cards: {flashcards.length}</Text>
        <TouchableOpacity 
          style={[styles.quizBtn, flashcards.length === 0 && styles.disabledBtn]} 
          disabled={flashcards.length === 0}
          onPress={() => navigation.navigate('Quiz', { cards: flashcards })}
        >
          <Text style={styles.quizBtnText}>⚡ Start Quiz</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={flashcards}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <View style={styles.cardInfo}>
              <Text style={styles.qText} numberOfLines={1}>🔹 Q: {item.question}</Text>
              <Text style={styles.aText} numberOfLines={1}>🔸 A: {item.answer}</Text>
            </View>
            <View style={styles.actionGroup}>
              <TouchableOpacity onPress={() => navigation.navigate('ManageCard', { card: item })} style={styles.editBtn}>
                <Text style={styles.btnTextSmall}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteCard(item.id)} style={styles.deleteBtn}>
                <Text style={[styles.btnTextSmall, { color: '#FF4D4D' }]}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No new FlashCard! 😮</Text>
            {/* <Text style={styles.emptySubText}>Niche diye gaye '+' button par click kar ke naya card banayen.</Text> */}
              <Text style={styles.emptySubText}>Touch on '+' button and make the new card </Text>
          </View>
        }
      />

      
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('ManageCard')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9', padding: 16 },
  headerStats: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
  statsText: { fontSize: 16, fontWeight: '700', color: '#4A5568' },
  quizBtn: { backgroundColor: '#4D96FF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 },
  disabledBtn: { backgroundColor: '#CBD5E0' },
  quizBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  cardWrapper: { backgroundColor: '#FFF', padding: 16, borderRadius: 16, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.04, shadowRadius: 4, elevation: 2 },
  cardInfo: { flex: 1, marginRight: 12 },
  qText: { fontSize: 16, fontWeight: '600', color: '#1A202C' },
  aText: { fontSize: 14, color: '#718096', marginTop: 6 },
  actionGroup: { flexDirection: 'row', alignItems: 'center' },
  editBtn: { backgroundColor: '#EBF8FF', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8, marginRight: 8 },
  deleteBtn: { backgroundColor: '#FFF5F5', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 },
  btnTextSmall: { fontSize: 13, fontWeight: '600', color: '#3182CE' },
  emptyContainer: { alignItems: 'center', marginTop: 60, paddingHorizontal: 20 },
  emptyText: { fontSize: 18, fontWeight: 'bold', color: '#4A5568' },
  emptySubText: { fontSize: 14, color: '#718096', textAlign: 'center', marginTop: 8 },
  fab: { position: 'absolute', right: 24, bottom: 24, backgroundColor: '#6BCB77', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 6 },
  fabText: { color: '#FFF', fontSize: 32, fontWeight: '300', marginBottom: 4 }
});