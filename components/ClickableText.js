import { Text } from "react-native";

export default function ClickableText({ style, text, cb }) {
    return (
        <Text
            onPress={() => cb()}
            style={{ ...style, textDecorationLine: "underline", fontWeight: "bold" }}
        >
            {text}
        </Text>
    );
}
