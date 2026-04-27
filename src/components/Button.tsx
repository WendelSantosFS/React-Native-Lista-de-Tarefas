
import {
    Pressable, PressableProps,
    Text,
    StyleSheet
} from "react-native"


type btnType = PressableProps & { label: string}



export default function Button ( {label, ...rest}: btnType) {

    return(

        <Pressable { ...rest } style={style.btn}>
            <Text style={style.label}>{ label }</Text>
        </Pressable>


    )
}


const style = StyleSheet.create({
    btn: {
        backgroundColor: "green",
        width: 48,
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        
        justifyContent: "center",
        alignItems: "center",
    },
    
    label: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
    }
})