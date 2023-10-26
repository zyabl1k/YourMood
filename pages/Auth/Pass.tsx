import {RootState} from "../../store/store";
import {Button, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {f, g} from "../../styles/global";
import { Component } from "../../components/export";

const Pass = ({navigation}) => {
    const value = useSelector((state: RootState) => state.user.value)
    const isDark = useSelector((state: RootState) => state.isDark.value)

    return (
        <SafeAreaView style={[isDark ? g.main_dark : g.main_light, styles.container]}>
            <View style={styles.content}>
                <Text style={[f.textBold, {fontSize: 48}]}>Привет {value.name}!</Text>
                <Text style={[f.textBold, {fontSize: 24, textAlign: 'center', width: "80%"}]}></Text>
            </View>
            <Component._Button onPress={() => navigation.navigate("Map")} style={{marginBottom: 28}} value={"Continue"} width="90%" backgroundColor="#fff" fontFamily="syne-m"  />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },

    content: {
        flex: 1,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    }

});

export default Pass;

