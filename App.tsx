import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as Font from "expo-font"
import * as SplashScreen from 'expo-splash-screen';

import {Screen} from "./pages/export";

import {defaultOptionsScreen} from "./.app/defaultOptionsScreen";

import {store} from "./store/store";
import {StatusBar} from "expo-status-bar";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const fonts = () => Font.loadAsync({
    "syne-r": require("./assets/fonts/Syne-Regular.ttf"),
    "syne-m": require("./assets/fonts/Syne-Medium.ttf"),
    "syne-b": require("./assets/fonts/Syne-SemiBold.ttf"),
    "syne-eb": require("./assets/fonts/Syne-ExtraBold.ttf")
})

SplashScreen.preventAutoHideAsync().catch(err => console.warn(err));

const App = () => {
    const [FontsIsLoad, setFontsIsLoad] = useState<boolean>(false);

    // connect fonts
    useEffect(() => {
        async function prepare() {
            try {
                await fonts()
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (err) {
                console.warn(err)
            } finally {
                setFontsIsLoad(true);
                await SplashScreen.hideAsync();
            }
        }
        prepare().then();
    }, []);

    if (!FontsIsLoad) {
        return null;
    }

    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{flex: 1}}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Name" component={Screen.Name} options={{...defaultOptionsScreen, gestureEnabled: false}} />
                        <Stack.Screen name="Pass" component={Screen.Pass} options={{...defaultOptionsScreen, gestureEnabled: false}} />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style="auto" animated={true}/>
            </GestureHandlerRootView >
        </Provider>
    )
}

export default App
