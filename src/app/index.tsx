import Input from "@/components/Input"
import { StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView
} from "react-native"



export default function Index() {

    return(
            <ScrollView style={ { flex: 1}}>
                <View style={style.container}>
                    <Text style={style.title}>Lista de Tarefas</Text>

                    <Input
                        placeholder="Digite a tarefa"
                    />
                </View>
            </ScrollView>
    )
}





const style = StyleSheet.create({

    container: {
        padding: 35,
        alignContent: "center",
        justifyContent: "center"
    },

    title: {
        fontSize: 30
    }
})