import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SPORTS = [
  { id: '1', name: 'Rugby', icon: 'sports-rugby' },
  { id: '2', name: 'Cricket', icon: 'sports-cricket' },
  { id: '3', name: 'Basketball', icon: 'sports-basketball' },
  { id: '4', name: 'Athletics', icon: 'directions-run' },
  { id: '5', name: 'Swimming', icon: 'pool' },
  { id: '6', name: 'Rowing', icon: 'rowing' },
  { id: '7', name: 'Boxing', icon: 'sports-mma' },
  { id: '8', name: 'Volleyball', icon: 'sports-volleyball' },
];

export default function SportsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SPORTS DIRECTORY</Text>
        <Text style={styles.subtitle}>Explore all Royal College sports</Text>
      </View>
      
      <View style={styles.grid}>
        {SPORTS.map((sport) => (
          <TouchableOpacity key={sport.id} style={styles.card} activeOpacity={0.8}>
            <View style={styles.iconContainer}>
              <MaterialIcons name={sport.icon as any} size={40} color="#002D72" />
            </View>
            <Text style={styles.cardTitle}>{sport.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { padding: 20, paddingTop: 60, backgroundColor: '#002D72', borderBottomWidth: 4, borderBottomColor: '#F2A900' },
  title: { fontSize: 24, fontWeight: '900', color: '#ffffff', letterSpacing: 1 },
  subtitle: { fontSize: 14, color: '#bfdbfe', marginTop: 4 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 12, justifyContent: 'space-between' },
  card: {
    width: '47%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 64, height: 64, borderRadius: 32, backgroundColor: '#f1f5f9',
    justifyContent: 'center', alignItems: 'center', marginBottom: 12,
  },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#002D72' },
});

