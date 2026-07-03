// // src/screens/AlertDetailScreen.js
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';

// export default function AlertDetailScreen({ route }) {
//   // HomeScreen se pass kiya hua alert data extract karein
//   const { alert } = route.params;

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//       <View style={styles.headerBadge}>
//         <Text style={styles.categoryText}>{alert.category}</Text>
//         <Text style={styles.severityText}>Severity: {alert.severity}</Text>
//       </View>

//       <Text style={styles.title}>{alert.title}</Text>
      
//       <View style={styles.infoRow}>
//         <Text style={styles.infoLabel}>📅 Date:</Text>
//         <Text style={styles.infoValue}>{alert.date}</Text>
//       </View>
      
//       <View style={styles.infoRow}>
//         <Text style={styles.infoLabel}>⏰ Time:</Text>
//         <Text style={styles.infoValue}>{alert.time}</Text>
//       </View>
      
//       <View style={styles.infoRow}>
//         <Text style={styles.infoLabel}>📍 Venue:</Text>
//         <Text style={styles.infoValue}>{alert.venue}</Text>
//       </View>

//       <View style={styles.divider} />

//       <Text style={styles.sectionTitle}>Description</Text>
//       <Text style={styles.descriptionText}>{alert.description}</Text>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   contentContainer: {
//     padding: 20,
//   },
//   headerBadge: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#007AFF',
//     backgroundColor: '#EBF5FF',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },
//   severityText: {
//     fontSize: 13,
//     color: '#8E8E93',
//     fontWeight: '500',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1C1C1E',
//     marginBottom: 20,
//     lineHeight: 30,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     marginBottom: 12,
//     alignItems: 'center',
//   },
//   infoLabel: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#636366',
//     width: 80,
//   },
//   infoValue: {
//     fontSize: 15,
//     color: '#1C1C1E',
//     fontWeight: '500',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#E5E5EA',
//     verticalMargin: 20,
//     marginVertical: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#1C1C1E',
//     marginBottom: 10,
//   },
//   descriptionText: {
//     fontSize: 16,
//     color: '#3A3A3C',
//     lineHeight: 24,
//   },
// });



// src/screens/AlertDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AlertDetailScreen({ route }) {
  // HomeScreen se pass kiya hua alert data extract karein
  const { alert } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerBadge}>
        <Text style={styles.categoryText}>{alert.category}</Text>
        <Text style={styles.severityText}>Severity: {alert.severity}</Text>
      </View>

      <Text style={styles.title}>{alert.title}</Text>
      
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>📅 Date:</Text>
        <Text style={styles.infoValue}>{alert.date}</Text>
      </View>
      
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>⏰ Time:</Text>
        <Text style={styles.infoValue}>{alert.time}</Text>
      </View>
      
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>📍 Venue:</Text>
        <Text style={styles.infoValue}>{alert.venue}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.descriptionText}>{alert.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
  },
  headerBadge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
    backgroundColor: '#EBF5FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  severityText: {
    fontSize: 13,
    color: '#8E8E93',
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 20,
    lineHeight: 30,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#636366',
    width: 80,
  },
  infoValue: {
    fontSize: 15,
    color: '#1C1C1E',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5EA',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#3A3A3C',
    lineHeight: 24,
  },
});