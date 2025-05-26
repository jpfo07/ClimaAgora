import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import useLocation from '../hooks/useLocation';

const API_KEY = '1cc228fa9b84094f9c108370e9b93c0e';

export default function WeatherScreen() {
  const { location, errorMsg } = useLocation();
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&lang=pt_br&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setLoading(false);
        })
        .catch(() => {
          setWeather(null);
          setLoading(false);
        });
    }
  }, [location]);

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{errorMsg}</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00f2ff" />
        <Text style={styles.loadingText}>Carregando clima...</Text>
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Não foi possível obter os dados do clima.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WeatherCard
        city={weather.name}
        temp={Math.round(weather.main.temp)}
        description={weather.weather[0].description}
        icon={weather.weather[0].icon}
        feelsLike={Math.round(weather.main.feels_like)}
        dateTime={new Date().toLocaleString('pt-BR')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#0f0f0f',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
  },
  error: {
    color: '#ff4c4c',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#ff4c4c88',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    textAlign: 'center',
  },
  loadingText: {
    color: '#00f2ff',
    fontSize: 16,
    marginTop: 10,
    fontWeight: '600',
    textShadowColor: '#00f2ff55',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
