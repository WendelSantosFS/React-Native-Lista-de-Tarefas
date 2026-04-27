import {
    View,
    Text,
    StyleSheet
} from 'react-native'


type itemProps = { task: string}
function ItemList ( { task }:itemProps ) {

    return(
        <View style={style.item}>
            <Text style={style.txt}>{task}</Text>
        </View>
    )
}



const style = StyleSheet.create({
    item: {
        backgroundColor: "#606060",
        borderRadius: 8,

        marginBottom: 10,
        padding: 10,
    },

    txt: {
        color: "#fff",
        fontSize: 25
    }
})





export default ItemList