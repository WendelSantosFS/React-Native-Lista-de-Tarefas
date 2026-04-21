import { 
    StyleSheet,
    View,
    TextInput,
    TextInputProps
} from "react-native"



export default function Input ( {...rest}: TextInputProps) {

    return <TextInput {...rest} style={style.input}/>
}


const style = StyleSheet.create({
    input: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderRadius: 9
    }
})