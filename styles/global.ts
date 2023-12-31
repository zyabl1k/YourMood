import {StyleSheet} from "react-native";

export const colors = {
    black100: "#030303",
    black50: "#202020",
    white100: "#fff",
    white70: "#f6f6f6",
    white50: "#ccc",
    pink100: "#ffc0cb"
}

export const g = StyleSheet.create({
    main_dark: {
        backgroundColor: colors.black100,
        justifyContent: "center",
        alignContent: "space-around",
        display: "flex"
    },

    main_light: {
        backgroundColor: colors.white100,
        justifyContent: "center",
        alignContent: "space-around",
        display: "flex"
    }
});

export const f = StyleSheet.create({
    textRegular: {
        color: colors.white100,
        fontFamily: "syne-r"
    },
    textMedium: {
        color: colors.white100,
        fontFamily: "syne-m",
    },
    textBold: {
        color: colors.white100,
        fontFamily: "syne-b"
    },
    textExtraBold: {
        color: colors.white100,
        fontFamily: "syne-eb"
    },
});