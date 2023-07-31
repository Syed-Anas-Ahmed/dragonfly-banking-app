import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ExchangeRates = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const API_KEY = '8577bc51a7bb42c900e818a0dfeb49d8';
    const apiUrl = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setExchangeRates(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <View>
        <Text>Loading data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error fetching data.</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.currency}>{item.currency}</Text>
      <Text style={styles.price}>_____</Text>
      <Text style={styles.rate}>{item.rate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Currency</Text>
        <Text style={styles.headerText}>Price</Text>
        <Text style={styles.headerText}>Rates</Text>
      </View>
      <FlatList
        data={Object.entries(exchangeRates.rates).map(([currency, rate]) => ({
          currency,
          rate,
        }))}
        renderItem={renderItem}
        keyExtractor={(item) => item.currency}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  currency: {
    flex: 1,
  },
  price: {
    flex: 1,
    textAlign: 'center',
  },
  rate: {
    flex: 1,
    textAlign: 'right',
  },
});

export default ExchangeRates;