import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import MainAppbar from './screens/MainAppBar'
import React from 'react'
import Settings from './context/Setting.js'
import { ThemeContext } from "./context/ThemeContext"
import Home from './Home.js'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <paperProvider>
      <ThemeProvider>
      <ThemeContext.Provider value={true}>
        <NavigationContainer>
          <StatusBar backgroundColor="#666" barStyle="light-content" />
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              header: (props) =>
                <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff" />
            }}
          >
            <Stack.Screen name="Home">
              {() =>
                <Home />
              }
            </Stack.Screen>
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
        </ThemeContext.Provider>
      </ThemeProvider>
    </paperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
