import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native";
import { FC } from "react";

export interface _InputProps {
    backgroundColor?: string,
    onChange: (text:string) => void,
    type: KeyboardTypeOptions,
    value:string,
    placeholder:string,
    style?: {},
    focused: boolean,
    setFocused: () => void,
    maxLength?: number,
    errorText?: string
}

export const _Input: FC<_InputProps> = ({errorText, maxLength, backgroundColor = "#222222", focused, setFocused, type, onChange, value, placeholder, style}:_InputProps) => {
    return (
        <View style={styles.holder}>
            <TextInput
                onFocus={setFocused}
                placeholderTextColor='#A3A3A3'
                placeholder={placeholder}
                value={value}
                maxLength={type === "phone-pad" ? 11 : maxLength}
                onChangeText={(text) => {onChange(text)}}
                keyboardType={type}
                style={[
                    errorText ? styles.error_input : styles.input,
                    {backgroundColor: backgroundColor},
                    style,
                ]}
            />
            {errorText ? <Text style={styles.error_text}>{errorText}</Text> : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    holder: {
        width: "90%",
        gap: 6
    },

    input: {
        width: "100%",
        paddingVertical: 12,
        borderRadius: 8,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#A3A3A3',
        color: '#FFFFFF',
        fontSize: 18
    },

    error_input: {
        width: "100%",
        paddingVertical: 12,
        borderRadius: 8,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderStyle: 'solid',
        color: '#FFFFFF',
        fontSize: 18,
        borderColor: '#ff0000',
    },

    error_text: {
        width: "90%",
        color: "#ff0000",
        justifyContent: "flex-start"
    },

    focusedInput: {
        borderColor: '#E7E7E7',
    },
});