import { View } from "react-native"
import React from "react"
import ThemeSwitchButton from "../components/ThemeSwitchButton.js"
import { useTheme } from './context/useTheme.js'
import Styles from "./components/Styles.js"

export default function Settings() {
    const { isDarkMode } = useTheme()
    return (
        <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
            <ThemeSwitchButton />
        </View>
    )
}
