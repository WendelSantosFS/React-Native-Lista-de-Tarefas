import Button from "@/components/Button"
import Input from "@/components/Input"

import { useEffect, useState } from "react"
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native"


import AsyncStorage from "@react-native-async-storage/async-storage"







async function asyncPersistData ( list: dataTypeTask[]) {
    const jsonObj = JSON.stringify(list)

    await AsyncStorage.setItem("todoRN", jsonObj)   // chave: todoRN= salva apenas 1.    @todoRN= um ARRAY desta chave. //não usar, por enquanto
    // await console.log('Task salva: ', list.task)
}




type statusTask= "feito" | "pendente"
interface dataTypeTask {
    id: number,
    task: string,
    status: statusTask
}
interface typePostSQL {
    url: string,
    id: number
    task: string,
    status: statusTask
}


function lastId ( list: dataTypeTask[]): number {
    if (list.length == 0) return 1


    let bigBig: number = 0;
    list.forEach( (task) => {
        if (task.id > bigBig) bigBig = task.id
    })

    return bigBig + 1;
}







export default function Index() {

    const [task, setTask ] = useState("")
    const [dataTask, setDataTask] = useState<dataTypeTask[]>([])

    const reverseDataTask = [...dataTask].reverse()
    
    useEffect( ()=> {

        async function dataReaload () {
            const data = await AsyncStorage.getItem("todoRN")

            if (data !== null) {
                const reloadData: dataTypeTask[] = JSON.parse(data)
                console.log(reloadData)
                setDataTask(reloadData)
            }
            
        }
        dataReaload()

    }, [])
    useEffect( () => { console.log('Atualizando via EFFECT: ', dataTask)   }, [dataTask])
    

    
    async function FuncSaveTask () {

        if (task.replaceAll(' ', '').length === 0) return

        const id: number = lastId(dataTask)  // reformular= não precisa de funcao pra ISSO
        const status: statusTask = "pendente"
        const newTask: dataTypeTask = { id, task, status,}
        
        setDataTask( data => [...data, newTask])
        asyncPersistData([...dataTask, newTask])
        setTask("")


        const url = await AsyncStorage.getItem('info-sql')
        const fetchUrl = "http://192.168.1.100:3000/create"
        const response = await fetch(fetchUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {url, id, task, status} )
        })

        const result = await response.json()
        console.log("Enviado pro banco: ", result)
        
    }



    async function pressSucess ( id: number ) {
        const url = await AsyncStorage.getItem("info-sql")
        
        const updatedTask: dataTypeTask[] = dataTask.map( task => { 
            return task.id === id ? {...task, status: "feito"} : task
        })
        setDataTask(updatedTask)
        asyncPersistData(updatedTask)

        
        
        const newStatus = "feito"
        const fetchUrlUpdate = "http://192.168.1.100:3000/updateStatus"
        const response = await fetch(fetchUrlUpdate, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url, id, newStatus})
        })

    }
    async function pressDelete ( id: number ) {

        const newArrayDeleted: dataTypeTask[] = [...dataTask].filter( (item) => item.id != id)
        asyncPersistData(newArrayDeleted)
        setDataTask(newArrayDeleted)

        const url = await AsyncStorage.getItem('info-sql')
        const fetchUrl = "http://192.168.1.100:3000/delete"
        const response = await fetch(fetchUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {url, id } )
        })

    }


    return(
            <View>
                <View style={style.container}>
                    <Text style={style.title}>Lista de Tarefas</Text>

                <View style={style.addTask}>
                    <Input
                        placeholder="Digite a tarefa "
                        value={task}
                        onChangeText={ (newTxt) => setTask(newTxt) }
                    />

                    <Button
                        label="+"
                        onPress={FuncSaveTask}
                        moreStyle={style.extraStyleBtn}
                    />
                </View>


                <View>
                    <FlatList 
                        data={reverseDataTask}
                        renderItem={ task => ( 
                           <View style={ [style.item,  task.item.status === "feito" && style.completed] }>

                                       <Text style={style.txt}>{task.item.task}</Text>
                           
                                       <View style={style.viewBtns}>

                                            {
                                                task.item.status === "pendente" ?
                                                    <Pressable style={ [style.sucess, style.btns]} onPress={() => pressSucess(task.item.id)}>
                                                        <Text style={style.textBtn}>Concluir</Text>
                                                    </Pressable>
                                                : <Text></Text>

                                            }

                           
                                           <Pressable style={ [style.cancel, style.btns]} onPress={() => pressDelete(task.item.id)}>
                                               <Text style={style.textBtn}>Excluir</Text>
                                           </Pressable>
                                       </View>
                            </View>

                        )}
                        
                        keyExtractor={ item => item.id.toString()} //`${item.id}` - O "keyExtractor" só retorna STRING
                    />

                </View>


                </View>
            </View>
    )
}





const style = StyleSheet.create({

    container: {
        padding: 25,
        alignContent: "center",
        justifyContent: "center",

        paddingTop: 140,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold"
    },

    addTask: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 7,

        margin: 20
    },







    item: {
        backgroundColor: "#606060",
        borderRadius: 8,

        marginBottom: 10,
        padding: 10,
    },
    txt: {
        color: "#fff",
        fontSize: 25
    },



    // Style de REnderizar o FLATLIST
    viewBtns: {
        flexDirection: 'row', 
        gap: 15,
        marginTop: 5, 
    },
    btns: {
        borderRadius: 10,
        height: 30,

        alignItems: "center",
        justifyContent: "center",
    },
    extraStyleBtn: {
        backgroundColor: "green",
        width: 48,
        height: 48,
    },
    textBtn: {
        color: "#fefbfb",
        fontSize: 20,
        fontWeight: "500",
        
    },
    sucess: {
        backgroundColor: "green",
        flex: 1,
    },
    cancel: {
        backgroundColor: "red",
        flex: 1,
    },

    completed: {
        backgroundColor: "green",
    }
})