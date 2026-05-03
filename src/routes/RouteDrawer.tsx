import { createDrawerNavigator } from "@react-navigation/drawer"
import Login from "@/Screens/Login"
import AddBd from "@/Screens/AddBd"







const Drawer = createDrawerNavigator()



export default function RouteDrawer () {
    return(
        <Drawer.Navigator >
            <Drawer.Screen name="Login" component={Login}/>
            <Drawer.Screen name="Salvar o Banco de Dados" component={AddBd}/>
        </Drawer.Navigator>
    )
}