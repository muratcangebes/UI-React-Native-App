import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route ,navigation}) => ({
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={24}
              color="#8B97A8"
              style={{ marginLeft: 15 }}
              onPress={() => null}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="settings-outline"
              size={24}
              color="#8B97A8"
              style={{ marginRight: 15 }}
              onPress={() => null}
            />
          ),
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle:{
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor:'#FFFF'
          },
          backgroundColor:'#FFFF',
          tabBarActiveTintColor: '#3D3270',
          tabBarInactiveTintColor: '#8B97A8',
          tabBarShowLabel: false,
          headerTitleAlign:'center',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}