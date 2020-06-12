import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});
