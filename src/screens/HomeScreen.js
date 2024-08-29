// screens/HomeScreen.js
import React from 'react';
import { View, ScrollView, StyleSheet,Text,FlatList } from 'react-native';
import Card from '../components/newsCard/card';
import DetailCard from '../components/DetailCard/detailCard';



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newsSection}>
        <Text style={styles.headingText}>NEWS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
          <Card />
        </ScrollView>
      </View>
      <View style={styles.detailsContainer}>
        <DetailCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  newsSection: {
    padding: 12, 
    marginBottom: 5, 
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3D3270',
    marginBottom: 5,
  },
  cardContainer: {
    alignItems: 'center',
  },
  detailsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 20,
  },
});

export default HomeScreen;
