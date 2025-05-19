import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface WeatherCardProps {
  city: string;
  temp: number;
  description: string;
  icon: string;
  feelsLike: number;
  dateTime: string;
}

export default function WeatherCard({ city, temp, description, icon, feelsLike, dateTime }: WeatherCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temp}>{temp}°C</Text>
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
        style={styles.icon}
      />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.feelsLike}>Sensação térmica: {feelsLike}°C</Text>
      <Text style={styles.dateTime}>{dateTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 4,
  },
  city: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temp: {
    fontSize: 48,
    fontWeight: '300',
  },
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
    marginVertical: 5,
  },
  feelsLike: {
    fontSize: 16,
    marginTop: 5,
  },
  dateTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
});
