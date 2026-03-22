import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HubScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BRADBY HUB</Text>
        <Text style={styles.subtitle}>Tickets & Official Merchandise</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tickets</Text>
        <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
          <MaterialIcons name="local-activity" size={32} color="#F2A900" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Bradby Shield - 2nd Leg</Text>
            <Text style={styles.cardSubtitle}>Buy VIP & General Admission Tickets</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Official Store</Text>
        <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
          <MaterialIcons name="shopping-bag" size={32} color="#002D72" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Bradby Special Jersey 2024</Text>
            <Text style={styles.cardSubtitle}>LKR 4,500.00</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Charity</Text>
        <TouchableOpacity style={[styles.actionCard, { backgroundColor: '#002D72' }]} activeOpacity={0.8}>
          <MaterialIcons name="favorite" size={32} color="#F2A900" />
          <View style={styles.cardTextContainer}>
            <Text style={[styles.cardTitle, { color: '#ffffff' }]}>Blue & Gold Foundation</Text>
            <Text style={[styles.cardSubtitle, { color: '#bfdbfe' }]}>Support our rural schools project</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { padding: 20, paddingTop: 60, backgroundColor: '#002D72', borderBottomWidth: 4, borderBottomColor: '#F2A900' },
  title: { fontSize: 24, fontWeight: '900', color: '#ffffff', letterSpacing: 1 },
  subtitle: { fontSize: 14, color: '#bfdbfe', marginTop: 4 },
  section: { padding: 16, marginTop: 8 },
  sectionTitle: { fontSize: 18, fontWeight: '900', color: '#002D72', marginBottom: 16 },
  actionCard: {
    backgroundColor: '#ffffff', borderRadius: 12, padding: 16,
    flexDirection: 'row', alignItems: 'center', marginBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 4, elevation: 2,
  },
  cardTextContainer: { flex: 1, marginLeft: 16 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#002D72' },
  cardSubtitle: { fontSize: 13, color: '#475569', marginTop: 2 },
});

