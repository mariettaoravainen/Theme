import React from 'react'
import Styles from '../Styles'
import { View, Text } from 'react-native'
import { useTheme } from '../context/UseTheme'

export default function Home() {
    const { isDarkMode } = useTheme ()
    return (
        <View style={[Styles.container.isDarkMode ? Styles.dark : Styles.light]}>
            <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
        </View>
    )
}