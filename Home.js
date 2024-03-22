import React, {useContext} from 'react'
import Styles from './components/Styles.js'
import { ThemeContext } from './context/ThemeContext.js'
import { View, Text } from 'react-native'

export default function Home() {
    const {isDarkMode} = useContext(ThemeContext)
    return(
        <View style={[Styles.container.isDarkMode ? Styles.dark : Styles.light]}>
            <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
        </View>
    )
}