import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Live Score Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>ROYAL COLLEGE</Text>
          <Text style={styles.headerSubtitle}>Home of Royal Sports</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>180/4</Text>
          <Text style={styles.oversText}>16.4 ovs (2.8 RR)</Text>
        </View>
      </View>

      {/* Hero Event Card (Bradby Shield) */}
      <View style={styles.heroCard}>
        <View style={styles.heroHeader}>
          <Text style={styles.heroBadge}>Featured Event</Text>
          <Text style={styles.heroLive}>Live Now</Text>
        </View>
        <View style={styles.heroBody}>
          <Text style={styles.heroTitle}>BRADBY SHIELD</Text>
          <Text style={styles.heroSubtitle}>Royal College vs Trinity College</Text>
          <TouchableOpacity style={styles.ticketButton} activeOpacity={0.8}>
            <Text style={styles.ticketButtonText}>GET TICKETS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Highlights Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recent Highlights</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          <View style={styles.carouselItem}>
            <View style={styles.placeholderImg} />
            <Text style={styles.carouselText}>Bradby Fiesta 2024</Text>
          </View>
          <View style={styles.carouselItem}>
            <View style={styles.placeholderImg} />
            <Text style={styles.carouselText}>Big Match Setup</Text>
          </View>
          <View style={styles.carouselItem}>
            <View style={styles.placeholderImg} />
            <Text style={styles.carouselText}>Tennis Finals</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Very light blue/gray background
  },
  header: {
    backgroundColor: '#002D72', // Royal Blue
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 60, // Padding for status bar
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#F2A900', // Gold border accent
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: '#bfdbfe', // light blue
    fontSize: 12,
    marginTop: 2,
  },
  scoreContainer: {
    alignItems: 'flex-end',
  },
  scoreText: {
    color: '#F2A900', // Gold
    fontSize: 28,
    fontWeight: '900',
  },
  oversText: {
    color: '#e2e8f0',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  heroCard: {
    margin: 16,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  heroHeader: {
    backgroundColor: '#002D72',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heroBadge: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroLive: {
    color: '#F2A900',
    fontSize: 12,
    fontWeight: 'bold',
  },
  heroBody: {
    padding: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#002D72',
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
    fontWeight: '500',
  },
  ticketButton: {
    backgroundColor: '#F2A900',
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#F2A900',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  ticketButtonText: {
    color: '#002D72',
    fontWeight: '900',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionContainer: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002D72',
    marginBottom: 16,
  },
  carousel: {
    flexDirection: 'row',
  },
  carouselItem: {
    marginRight: 16,
    width: 140,
  },
  placeholderImg: {
    width: 140,
    height: 100,
    backgroundColor: '#cbd5e1',
    borderRadius: 12,
    marginBottom: 8,
  },
  carouselText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
  },
});
