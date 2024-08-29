import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetailedCard = ({ icon, title, description, backgroundColor, iconColor }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color={iconColor} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color={iconColor} />
    </View>
  );
};

const CardList = () => {
  const cards = [
    { id: 1, icon: 'calendar-outline', title: 'How was your day?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel odio en urna ultrice...', backgroundColor: '#D1E9F6', iconColor: '#008080' },
    { id: 2, icon: 'calendar-outline', title: 'How was your day?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel odio en urna ultrice...', backgroundColor: '#FFF1C1', iconColor: '#4B0082' },
    { id: 3, icon: 'time-outline', title: 'Current Transit: 3rd House', description: 'This is demonstrate siblings, hobbies, efforts, confidence, friends and short tr...', backgroundColor: '#FFF0F0', iconColor: '#FF6347' },
    { id: 4, icon: 'school-outline', title: 'Lorem ipsum dolor sit amet', description: 'This is demonstrate siblings, hobbies, efforts, confidence, friends and short tr...', backgroundColor: '#E7E8D8', iconColor: '#FF6347' },
    { id: 5, icon: 'server-outline', title: 'Lorem  sit amet', description: 'This is demonstrate siblings, hobbies, efforts, confidence, friends and short tr...', backgroundColor: '#FFF0F0', iconColor: '#FF6347' },
  ];

  return (
    <FlatList
      data={cards}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <DetailedCard
          icon={item.icon}
          title={item.title}
          description={item.description}
          backgroundColor={item.backgroundColor}
          iconColor={item.iconColor}
        />
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  iconContainer: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default CardList;
