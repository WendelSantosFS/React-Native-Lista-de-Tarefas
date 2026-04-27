import Button from "@/components/Button"
import Input from "@/components/Input"
import ItemList from "@/components/ItemList"

import { useEffect, useState } from "react"
import {
    FlatList,
    ScrollView,
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




type statusTask= "feito" | "ativo"
interface dataTypeTask {
    id: number,
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
    

    async function FuncSaveTask () {

        if (task.replaceAll(' ', '').length === 0) return

        const newIdTask: number = lastId(dataTask)

        const newTask: dataTypeTask = { id: newIdTask, task, status: "ativo"}

        
        setDataTask( data => [...data, newTask])

        // const mergeDatas = [...dataTask, newTask]  // Assim eu entendo mais facilmente
        // asyncPersistData(mergeDatas)


        asyncPersistData([...dataTask, newTask])
        console.log('task setData: ', [...dataTask, newTask])
        setTask("")
    }


    return(
            <ScrollView style={ { flex: 1}}>
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
                    />
                </View>

                <View>
                    <FlatList 
                        data={reverseDataTask}
                        renderItem={ task => ( <ItemList task={task.item.task}/>)}
                        keyExtractor={ item => item.id.toString()} //`${item.id}` - O "keyExtractor" só retorna STRING
                    />
                </View>


                </View>
            </ScrollView>
    )
}





const style = StyleSheet.create({

    container: {
        padding: 25,
        alignContent: "center",
        justifyContent: "center",

        paddingTop: 70,
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

        marginBottom: 20,
        marginTop: 20,
    }
})