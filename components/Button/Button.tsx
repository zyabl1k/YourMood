import { TouchableOpacity, Text, View, ViewStyle, StyleProp, DimensionValue } from "react-native";
import { FC } from "react";

export interface _ButtonProps {
    width: DimensionValue | "90%",
    onPress?: () => void,
    value?: string,
    backgroundColor?: string | "#fff",
    TextColor?:string | "#030303",
    fontFamily?: string,
    style?: StyleProp<ViewStyle>,
    disabled?: boolean
}

export const _Button: FC<_ButtonProps> = ({disabled, style, width, onPress, value, backgroundColor, TextColor, fontFamily}: _ButtonProps) => (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[style, { width: width }]}>
        <View style={{backgroundColor:backgroundColor,display:'flex',borderRadius:8,paddingVertical:12}}>
            <Text style={{color:TextColor, textAlign:"center", fontSize: 20, fontFamily: fontFamily}}>{value}</Text>
        </View>
    </TouchableOpacity >
)