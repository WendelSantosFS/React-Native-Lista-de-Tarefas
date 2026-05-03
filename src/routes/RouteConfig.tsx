import { createNativeStackNavigator } from "@react-navigation/native-stack"
import IntoApp from "../Screens/IntoApp"
import { NavigationContainer } from "@react-navigation/native"

import RouteDrawer from "./RouteDrawer"



type RootStackParamList = {
    RouteDrawer: undefined
    IntoApp: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()


function RouteConfig () {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={ { headerShown: false }}>
                <Stack.Screen name="RouteDrawer" component={RouteDrawer} />
                <Stack.Screen name="IntoApp" component={IntoApp} />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
export { RouteConfig, RootStackParamList}