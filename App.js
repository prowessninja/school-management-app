import 'react-native-gesture-handler'; // First import, before anything else
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen
import * as Font from 'expo-font'; // Import Font
import { PaperProvider } from 'react-native-paper'; // Import PaperProvider
import Navigation from './navigation/Navigation'; // Import Navigation

// Prevent auto hide of the splash screen until fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Preload fonts here
        await Font.loadAsync({
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e); // Catch any font loading error
      } finally {
        setAppIsReady(true); // Set appIsReady to true when fonts are loaded
      }
    }

    prepare(); // Call the prepare function when the app loads
  }, []);

  useEffect(() => {
    if (appIsReady) {
      // Hide splash screen after fonts are loaded and app is ready
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Prevent rendering until fonts are loaded
  }

  return (
    <PaperProvider> {/* Wrap the app with PaperProvider for Paper components */}
      <Navigation /> {/* Render the navigation */}
    </PaperProvider>
  );
}
