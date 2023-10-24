import { FC, ReactNode } from 'react'
import {Linking, Text} from 'react-native'

export interface _LinkProps {
    children: ReactNode,
    href?: string | null,
    style?: {},
}

export const _Link: FC<_LinkProps> = ({children, href, style}: _LinkProps) => (
    <Text children={children} style={[style, {textDecorationLine: "underline"}]} onPress={() => href ? Linking.openURL(href) : {}} />
)