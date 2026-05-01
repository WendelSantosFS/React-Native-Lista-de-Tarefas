import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Screens/Login"
import IntoApp from "../Screens/IntoApp"
import { createStaticNavigation, NavigationContainer } from "@react-navigation/native"


type RootStackParamList = {
    Login: undefined,
    IntoApp: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()


function RouteConfig () {
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="IntoApp" component={IntoApp} />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
export { RouteConfig, RootStackParamList}