import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Profile Section */}
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <View style={styles.avatar}>
            <MaterialIcons name="person" size={48} color="#002D72" />
          </View>
          <View style={styles.textInfo}>
            <Text style={styles.name}>Manoj Perera</Text>
            <Text style={styles.studentId}>ID: 2025/RC/0492</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
          <MaterialIcons name="edit" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Digital ID Card */}
      <View style={styles.idCardContainer}>
        <View style={styles.idCard}>
          <View style={styles.idHeader}>
            <Text style={styles.idCollege}>ROYAL COLLEGE</Text>
            <Text style={styles.idType}>STUDENT ID</Text>
          </View>
          <View style={styles.idBody}>
            <MaterialIcons name="qr-code-2" size={100} color="#002D72" />
            <Text style={styles.scanText}>Scan for Entry</Text>
          </View>
        </View>
      </View>

      {/* Community Links */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Community & Groups</Text>
        
        <TouchableOpacity style={styles.linkCard} activeOpacity={0.8}>
          <MaterialIcons name="groups" size={28} color="#002D72" />
          <Text style={styles.linkText}>Prefect Council Hub</Text>
          <MaterialIcons name="chevron-right" size={24} color="#94a3b8" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.linkCard} activeOpacity={0.8}>
          <MaterialIcons name="campaign" size={28} color="#002D72" />
          <Text style={styles.linkText}>Clubs & Societies</Text>
          <MaterialIcons name="chevron-right" size={24} color="#94a3b8" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.linkCard} activeOpacity={0.8}>
          <MaterialIcons name="settings" size={28} color="#002D72" />
          <Text style={styles.linkText}>App Settings</Text>
          <MaterialIcons name="chevron-right" size={24} color="#94a3b8" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: {
    backgroundColor: '#002D72',
    padding: 20,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#F2A900',
  },
  profileInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#f1f5f9', justifyContent: 'center', alignItems: 'center' },
  textInfo: { marginLeft: 16 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#ffffff' },
  studentId: { fontSize: 14, color: '#bfdbfe', marginTop: 4, fontWeight: '500' },
  editButton: { padding: 8, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 20 },
  idCardContainer: { padding: 16, marginTop: 8 },
  idCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  idHeader: { backgroundColor: '#F2A900', padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  idCollege: { color: '#002D72', fontWeight: '900', fontSize: 16, letterSpacing: 1 },
  idType: { color: '#002D72', fontWeight: 'bold', fontSize: 12 },
  idBody: { padding: 24, alignItems: 'center' },
  scanText: { marginTop: 12, color: '#475569', fontWeight: 'bold', fontSize: 14 },
  section: { padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '900', color: '#002D72', marginBottom: 16 },
  linkCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  linkText: { flex: 1, marginLeft: 16, fontSize: 16, fontWeight: '700', color: '#334155' },
});
