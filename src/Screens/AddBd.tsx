import Button from "@/components/Button";
import Input from "@/components/Input";
import { Alert, StyleSheet, Text, View } from "react-native";

import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";





type dataSQL = {
    bds: string,
    username: string,
    password: string,
    host: string,
    nomeBanco: string
}

const keyURLbd = "info-sql"
async function saveMemory ( {bds, username, password, host, nomeBanco}: dataSQL) {
    const URL = `${bds}://${username}:${password}@host:${host}/${nomeBanco}`

    await AsyncStorage.setItem(keyURLbd, URL)
    console.log("info-SQL salvo: ", URL)
}




export default function AddBd () {
    const [bds, setBds] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [host, setHost] = useState("")
    const [nomeBanco, setNomeBanco] = useState("")

    const [url, setURl] = useState<string | null>(null)



    async function handleSaveSQL () {

        const campoVazio: boolean = bds.replaceAll(' ', '').length < 1 || username.replaceAll(' ', '').length < 1 || password.replaceAll(' ', '').length < 1 || host.replaceAll(' ', '').length < 1 || nomeBanco.replaceAll(' ', '').length < 1
        if ( campoVazio ) {
            Alert.alert("Algum campo está VAZIO")
        } else { 
            saveMemory({ bds, username, password, host, nomeBanco})
            setURl("")
        }
        

        setBds("")
        setUsername("")
        setPassword("")
        setHost("")
        setNomeBanco("")
    }
    async function removeStringSQL () {
        
        setURl("")
        const newURLvoid = ""
        await AsyncStorage.setItem(keyURLbd, newURLvoid)
    
    }


    useEffect( ()=> {

        async function getUrl () {

            const response = await AsyncStorage.getItem(keyURLbd)
            setURl(response)
            console.log('URL salva: ', response)
        }
        getUrl()

    }, [url])


    return (
        <View style={style.container}>
            <Text style={ { fontSize: 30, fontWeight: "bold"}}>Só salva no PosgreSQL</Text>

            { 
                typeof url === 'string' ? 
                
                <View style={style.viewSqlString}>

                    <Text style={style.textViewSql}>{url}</Text>
                    <Button 
                        label="Remover URL - SQL" 
                        moreStyle={style.removeString}
                        onPress={removeStringSQL}
                    />

                </View> : 

                <View  style={style.viewTextsInput}>
                    <Input 
                        placeholder="Qual BD( PostgreSQL, SQLite)"
                        value={bds}
                        onChangeText={ (text) => setBds(text)}
                    />

                    <Input 
                        placeholder="Username"
                        value={username}
                        onChangeText={ (text) => setUsername(text)}
                    />

                    <Input 
                        placeholder="Password"
                        value={password}
                        onChangeText={ (text) => setPassword(text)}
                        secureTextEntry
                    />

                    <Input 
                        placeholder="Host"
                        keyboardType="numeric"
                        value={host}
                        onChangeText={ (text) => setHost(text)}
                    />

                    <Input 
                        placeholder="Nome do Banco de Dados"
                        value={nomeBanco}
                        onChangeText={ (text) => setNomeBanco(text)}
                    />

                <Button label="Salvar" moreStyle={style.btn} onPress={handleSaveSQL}/>
            </View>
                
            }

            
        </View>
    )
}




const style = StyleSheet.create({
    container: {
        gap: 10,
        padding: 20,

        marginTop: 20,

    },
    viewTextsInput: {
        gap: 10,
    },

    btn: {
        backgroundColor: "blue"
    },
    removeString: {
        backgroundColor: "red",
    },

    
    viewSqlString: {
        marginTop: 30,
        gap: 20,
    },
    textViewSql: {
        fontSize: 20,
        fontWeight: "bold",
    }
})