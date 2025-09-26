import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from './constants/Colors'
import ThemedLogo from '../components/ThemedLogo'

const About = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light 

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={styles.header}>About</Text>
      <Text style={styles.title}>About the App</Text>

      <Link href="" style={styles.link}>Back Home</Link>
    </View>

    
  )
}

export default About

const styles = StyleSheet.create({
     container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        marginTop: 0,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,

    },
    head: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    link: {
      marginVertical: 10,
      marginBottomWidth: 1,
    }

})
