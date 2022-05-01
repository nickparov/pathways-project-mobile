import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import HeaderText from "../components/HeaderText";
import AccountLogo from "../components/AccountLogo";
import NotificationLogo from "../components/NotificationLogo";
import TopBarBtn from "../components/TopBar";
import DismissKeyboard from "../components/DismissKeyboard";
import GlobalState from "../GlobalState";
import generateRandNum from "../Misc";

export default function SingleChat({ imageSource, from, message, time, onClick, style, lastOnline }) {
    return (
        <TouchableOpacity style={{...styles.chatElement, ...style}} onPress={onClick}>
            <Image
                style={styles.ImageLogo}
                source={imageSource}
            />
            <View style={styles.ChatElementTextSection}>
                <Text
                    style={{
                        ...styles.ChatElementText,
                        ...styles.BoldChatElementText,
                        paddingTop: 3,
                    }}
                >
                    {from}
                </Text>
                <Text style={{ ...styles.ChatElementText, paddingTop: 4 }}>
                    {message ? message : lastOnline ? `Last online: ${lastOnline}` : ""}
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text
                    style={{
                        ...styles.ChatElementText,
                        alignSelf: "flex-end",
                        paddingRight: 10,
                    }}
                >
                    {time}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    text: {
        color: "#ffffff",
        fontWeight: "bold",
    },
    WelcomeText: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 32,
        lineHeight: 36,
        color: "#0E2C4B",
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 25,
        padding: 10,
    },
    loginBtn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F36825",
        padding: 10,
        borderRadius: 6,
        height: 56,
    },
    loginBtnDisabled: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eba07c",
        padding: 10,
        borderRadius: 6,
        height: 56,
    },
    TopBarBtn: {
        flex: 1,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        paddingBottom: 13,
    },
    SelectedTopBarBtn: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
    },
    SelectedTopBarText: {
        fontWeight: "700",
    },
    ChatsSectionText: {
        fontWeight: "400",
        fontSize: 16,
        marginBottom: 10,
    },
    ImageLogo: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    ChatContainer: {
        marginTop: 10,
        flexDirection: "column",
        height: 420,
    },
    chatElement: {
        height: 48,
        flexDirection: "row",
        marginBottom: 25,
    },
    ChatElementTextSection: {
        flexDirection: "column",
    },
    ChatElementText: {
        paddingLeft: 15,
        color: "#667080",
    },
    BoldChatElementText: {
        fontWeight: "700",
    },
});
