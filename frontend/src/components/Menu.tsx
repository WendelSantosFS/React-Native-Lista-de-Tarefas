// import {
//     Pressable,
//     PressableProps,
//     StyleSheet,
//     View,

// } from "react-native"


// type btnPress = PressableProps & {}


// export default function Menu ( { ...rest }: btnPress) {

//     return(
//         <Pressable {...rest} style={ ({pressed}) => [{
//             backgroundColor: '#fff',
//             opacity: pressed ? 0.5 : 1,
//         }, style.container]}>
//             <View style={style.item}></View>
//             <View style={style.item}></View>
//             <View style={style.item}></View>
//         </Pressable>
//     )
// }



// const style = StyleSheet.create({

//     container: {
//         borderWidth: .5,
//         borderColor: "#606060",
//         borderRadius: 5,
//         padding: 7,
//         width: 50,
//         height: 50,
        
//         gap: 5,

//         alignItems: "center",
//         justifyContent: "space-between",
//     },

//     item: {
//         width: '90%',
//         height: 5,
//         backgroundColor: "#606060c2",
//         borderRadius: 10,


//     }

// })