import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Screens/Login"
import Index from "../Screens/Index"
import { NavigationContainer } from "@react-navigation/native"


const Stack = createNativeStackNavigator()

export default function RouteConfig () {


    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Index" component={Index} />
            </Stack.Navigator>
            
        </NavigationContainer>
    )


}