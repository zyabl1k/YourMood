import {View, Text} from "react-native";
import {useEffect, useState} from "react";
import {RootState} from "../../store/store";
import {useSelector} from "react-redux";

const Pass = () => {
    const value = useSelector((state: RootState) => state.user.value)

    return (
        <View>
            <Text>Привет {value.name}</Text>
        </View>
    )
}

export default Pass;

