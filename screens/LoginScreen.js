import * as React from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Components
import ClickableText from "../components/ClickableText";
import HeaderText from "../components/HeaderText";
import constants from "../constants";
import DismissKeyboard from "../components/DismissKeyboard";

export default function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const navigateToMainScreen = () => navigation.navigate("Main")

    return (
        <DismissKeyboard>
            <SafeAreaView
                style={{
                    flex: 1,
                    padding: 30,
                }}
            >
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                    barStyle={"dark-content"}
                />

                <HeaderText
                    text={"Welcome to Pathways!"}
                    style={{ marginTop: 30 }}
                />
                <Text
                    style={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: 22,
                        color: constants.font.darkColor,
                        marginTop: 15,
                    }}
                >
                    Login below or{" "}
                    <ClickableText
                        text="create an account"
                        cb={() => navigation.navigate("Register")}
                    />
                </Text>

                <Text style={{ marginTop: 45, marginBottom: 5 }}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    secureTextEntry={false}
                    autoComplete="email"
                    keyboardType="email-address"
                />

                <Text style={{ marginTop: 0, marginBottom: 5 }}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={
                        email.length === 0 || password.length === 0
                            ? styles.loginBtnDisabled
                            : styles.loginBtn
                    }
                    onPress={() => navigateToMainScreen()}
                    disabled={email.length === 0 || password.length === 0}
                >
                    <Text style={{ color: "white", fontWeight: "700" }}>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <ClickableText
                    text="Forgot Password"
                    style={{ textAlign: "center", paddingTop: 15 }}
                    cb={() => console.log("Forgot Password Clicked!")}
                />
            </SafeAreaView>
        </DismissKeyboard>
    );
}

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
});
