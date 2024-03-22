import React from 'react'
import { Switch } from 'react-native-paper'
import { useTheme } from 'react-native-paper'

export default function ThemeSwitchButton() {
    const { isDarkMode, toggleDarkMode } = useTheme()

    return (
        <Switch value={isDarkMode} onValueChange={toggleDarkMode}/>
    )
}