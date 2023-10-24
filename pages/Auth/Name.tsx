import {View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard} from "react-native";
import { f, g } from "../../styles/global";
import { Component } from "../../components/export";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginUser, setUserName} from "../../store/slices/userSlice";
import {store} from "../../store/store";

const Name = ({navigation}) => {
    const [valueLogin, setValueLogin] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [errorText, setErrorText] = useState('');
    const dispatch = useDispatch();

    const changeText = (text:string) => {
        const empty = !text.length
        setErrorText(empty ? 'Поле не может быть пустым' : '')
        setValueLogin(text)
    }

    const setFocused = () => {
        setIsFocused(true)
    }

    const nextPage = () => {
        if(valueLogin.length > 3) {
            store.dispatch(setUserName(valueLogin));
            navigation.navigate('Pass')
        } else {
            const empty = !valueLogin.length
            setErrorText(empty ? 'Поле не может быть пустым' : 'Не мение 3-х символов')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {setIsFocused(false); Keyboard.dismiss();}}>
            <SafeAreaView style={[g.main, styles.container]}>
                <View style={styles.content}>
                    <Text style={[f.textBold, {fontSize: 36}]}>Введите свое имя</Text>
                    <Component._Input focused={isFocused} errorText={errorText} setFocused={setFocused} type={"default"} value={valueLogin} onChange={changeText} placeholder="Напишите имя" />
                </View>
                <Component._Button onPress={nextPage} style={{marginBottom: 28}} value={"Continue"} width="90%" backgroundColor="#fff" fontFamily="syne-m"  />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-between",
        alignItems:"center",
    },

    content: {
        flex: 2,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 26
    }
});

export default Name;

