import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Main from './screens/Main'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text
        style={{
          marginBottom: 10,
          marginTop: 10,
          fontSize: 20,
          fontWeight: '300',
        }}
      >
        My Photos
      </Text>
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 10,
  },
})
