
import {
    Pressable, PressableProps,
    Text,
    StyleSheet
} from "react-native"


type btnType = PressableProps & { label: string, moreStyle?: any} 



export default function Button ( {label, moreStyle, ...rest}: btnType) {

    return(

        <Pressable style={[style.btn, moreStyle ]} {...rest}>
            <Text style={style.label}>{ label }</Text>
        </Pressable>


    )
}


const style = StyleSheet.create({
    btn: {
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