// components/newsCard/Card.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Card = ({ backgroundColor, description }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const CardList = () => {
  const cards = [
    { id: 1, backgroundColor: '#F39C9C', description: 'Short news title will be here' },
    { id: 2, backgroundColor: '#8EC5FC', description: 'Short news title will be here' },
    { id: 3, backgroundColor: '#B4FF9F', description: 'Short news title will be here' },
    { id: 4, backgroundColor: '#FFD1A9', description: 'Short news title will be here' },
    { id: 5, backgroundColor: '#FD8A8A', description: 'Short news title will be here' },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {cards.map((card) => (
          <Card 
            key={card.id}
            backgroundColor={card.backgroundColor}
            description={card.description}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    margin: 10,
  },
  card: {
    width: 153,
    height: 83,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});

export default CardList;
