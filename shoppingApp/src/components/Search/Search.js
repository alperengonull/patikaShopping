import { View,TextInput } from 'react-native'
import React from 'react'
import styles from './Search.style'

const Search = () => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Ara..." />
    </View>
  )
}

export default Search