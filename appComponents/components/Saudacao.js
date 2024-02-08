import { View, Text } from "react-native";

export default ({ name }) => {
    return (
        <View>
            <Text style={{color: 'pink'}}>Olá, {name}! Seja bem vindo(a)!</Text>
        </View>
    )
}