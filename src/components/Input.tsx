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
        flex: 1,
        height: 48,
        borderWidth: 1,
        borderRadius: 10
    }
})