import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import HeaderText from "../components/HeaderText";
import AccountLogo from "../components/AccountLogo";
import NotificationLogo from "../components/NotificationLogo";
import TopBarBtn from "../components/TopBar";
import BlogElement from "../components/BlogElement";
import Jumbotron from "../components/Jumbotron";

export default LogoTextElement = ({ text, headerText, imageSource }) => {
    return (
        <View style={{ flexDirection: "row", paddingTop: 16 }}>
            <Image
                style={{
                    width: 41,
                    height: 41,
                    borderRadius: 20.5,
                }}
                source={imageSource ? imageSource : {
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
            />
            <View style={{ flexDirection: "column", paddingLeft: 16 }}>
                <Text style={styles.header2Text}>{headerText}</Text>
                <Text>{text}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        marginBottom: 30,
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
    header2Text: {
        fontWeight: "700",
        fontSize: 18,
    },
    shadowBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
});
