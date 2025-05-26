import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia!';
    if (hour < 18) return 'Boa tarde!';
    return 'Boa noite!';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting()}</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Weather')}>
        <Text style={styles.buttonText}>🌩️ Ver clima agora</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 32,
    color: '#00f2ff',
    fontWeight: 'bold',
    marginBottom: 40,
    textShadowColor: '#00f2ff88',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1f1f1f',
    borderWidth: 2,
    borderColor: '#00f2ff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#00f2ff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#00f2ff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});