/*
# README

Fires an event when the user shakes the device.

# INSTALL

**The `--force` is needed because the package is not yet compatible with RN 0.72.6. But it works.**

npm install --force react-native-shake
npx pod-install

# NO, SERIOUSLY, READ ME

Yes, the developer menu comes up. You have to run a release build to get rid of it.

Control-M (on Windows) and Command-M (on Mac) will perform a shake in the ANDROID simulator.

It appears that you can't really get a shake from the Android simulator for a debug build.

"Shake" is in the Device menu of the iOS simulator.
*/


import React from 'react';
import {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RNShake from 'react-native-shake';


const App = () => {
    const [shakeCount, setShakeCount] = React.useState(0);

    // const currentShakeCount = React.useRef();
    useEffect(() => {
        const subscription = RNShake.addListener(() => {
          setShakeCount(shakeCount => shakeCount + 1)
        })

        return () => {
          subscription.remove()
        }
      }, [])


  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Been shaken {shakeCount} times.</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
