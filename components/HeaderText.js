import { Text, StyleSheet } from "react-native";

export default function HeaderText({ text, style }) {
    return  <Text style={{...style, ...styles.HeaderText }}>{text}</Text>;
}

const styles = StyleSheet.create({
    HeaderText: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 36,
        color: "#0E2C4B"
    },
});