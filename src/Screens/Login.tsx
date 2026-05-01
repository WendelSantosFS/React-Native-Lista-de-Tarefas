import Button from "@/components/Button"
import Input from "@/components/Input"

import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "@/routes/RouteConfig"

import { useState } from "react"

import {
    Alert,
    StyleSheet,
    Text,
    View
} from "react-native"



type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Login">
}

export default function Login ( { navigation }: Props) {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")


    function handleAuth () {

        if (user.length < 1 || password.length < 1) return Alert.alert("Algum campo está vazio!")

        if (user === "admin" && password === "1234") { 
            setUser("")
            setPassword("")
            return navigation.navigate("IntoApp") 
        }
        else return Alert.alert("O usuário OU a senha errados!")

    }


    return(
        <View style={style.container}>
            <Text style={style.title}>Tela de Login</Text>

            <View style={style.viewsTextInput}>

                <Input 
                    style={style.textInput}
                    value={user}
                    onChangeText={setUser}
                />
                 <Input 
                    style={style.textInput}
                    value={password}
                    onChangeText={setPassword}
                    
                    secureTextEntry
                />

                <Button 
                    label="Entrar"
                    moreStyle={style.btnEntrar}
                    onPress={handleAuth}
                />
            </View>
        </View>
    )
}


const style = StyleSheet.create({

    container: {
        color: "#000",

        gap: 20,
        padding: 25,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },

    viewsTextInput: {
        gap: 10,
    },
    textInput: {
        paddingLeft: 5
    },


    btnEntrar: {
        backgroundColor: "blue",
        borderRadius: 20,
    }

})