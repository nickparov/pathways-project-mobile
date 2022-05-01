import * as React from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Icon from "react-native-vector-icons/AntDesign";
import RadioButtonRN from "radio-buttons-react-native";
import RNPickerSelect from "react-native-picker-select";

// import { Picker } from "@react-native-picker/picker";

import ClickableText from "../components/ClickableText";
import HeaderText from "../components/HeaderText";
import constants from "../constants";
import DismissKeyboard from "../components/DismissKeyboard";
import GlobalState from "../GlobalState";

export default function RegisterScreen({ navigation }) {
    const [firstStepDone, updateFirstStep] = React.useState(false);

    function RegisterFinalStepScreen() {
        const [position, updatePosition] = React.useState("");
        const [exp, updateExp] = React.useState(true);

        const updateExpericene = ({employed}) => {
            console.log(employed);

            GlobalState.user = {
                employed: employed
            }

            updateExp(employed);
        }

        // radio btns
        const data = [
            {
                label: "I have a working experience",
                employed: true
            },
            {
                label: "I am looking for a job now",
                employed: false
            },
        ];

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
                        text={"One More Step!"}
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
                        Let us know a little bit about you
                    </Text>

                    <RadioButtonRN
                        data={data}
                        selectedBtn={(e) => updateExpericene(e)}
                        box={false}
                        style={{ marginTop: 50 }}
                        initial={1}
                    />

                    <Text style={{ marginTop: 45, marginBottom: 5 }}>
                        Your current job
                    </Text>
                    <RNPickerSelect
                        onValueChange={(value) => updatePosition(value)}
                        items={[
                            { label: "Web Developer", value: "Web Developer" },
                            {
                                label: "Front-End developer",
                                value: "Front-End developer",
                            },
                            { label: "DB Manager", value: "DB Manager" },
                            {
                                label: "System Administrator",
                                value: "System Administrator",
                            },
                        ]}
                        style={pickerSelectStyles}
                        Icon={() => (
                            <Icon
                                name="down"
                                size={24}
                                style={{
                                    color: "#0E2C4B",
                                    paddingRight: 13,
                                    paddingTop: 13,
                                }}
                            />
                        )}
                    />

                    <View style={styles.container}>
                        <TouchableOpacity
                            style={{
                                ...styles.Btn,
                                ...styles.backStepBtn,
                            }}
                            onPress={() => updateFirstStep(false)}
                        >
                            <Text style={{ color: "white", fontWeight: "700" }}>
                                {"<"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                ...styles.Btn,
                                ...(position.length === 0
                                    ? styles.Disabled
                                    : {}),
                                marginLeft: 10,
                            }}
                            onPress={() => navigation.navigate("Main")}
                            disabled={position.length === 0}
                        >
                            <Text style={{ color: "white", fontWeight: "700" }}>
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </DismissKeyboard>
        );
    }

    function RegisterFirstStepScreen() {
        const [email, onChangeEmail] = React.useState("");
        const [password, onChangePassword] = React.useState("");

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
                        text={"Create Account"}
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
                        Enter account details below or{" "}
                        <ClickableText
                            text="log in"
                            cb={() => navigation.navigate("Login")}
                        />
                    </Text>

                    <Text style={{ marginTop: 45, marginBottom: 5 }}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        secureTextEntry={false}
                    />

                    <Text style={{ marginTop: 0, marginBottom: 5 }}>
                        Password
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                    />

                    <View style={styles.container}>
                        <TouchableOpacity
                            style={{
                                ...styles.Btn,
                                ...styles.backStepBtn,
                                ...styles.Disabled,
                            }}
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{ color: "white", fontWeight: "700" }}>
                                {"<"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                ...styles.Btn,
                                ...(email.length === 0 || password.length === 0
                                    ? styles.Disabled
                                    : {}),
                                marginLeft: 10,
                            }}
                            onPress={() => updateFirstStep(true)}
                            disabled={
                                email.length === 0 || password.length === 0
                            }
                        >
                            <Text style={{ color: "white", fontWeight: "700" }}>
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </DismissKeyboard>
        );
    }

    return firstStepDone ? (
        <RegisterFinalStepScreen />
    ) : (
        <RegisterFirstStepScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
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
    Btn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F36825",
        padding: 10,
        borderRadius: 6,
        height: 56,
        flex: 4,
    },
    Disabled: {
        backgroundColor: "#eba07c",
    },
    backStepBtn: {
        flex: 1,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 6,
        color: "black",
        paddingRight: 30, // to ensure the text is never behind the icon
        marginBottom: 45,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "purple",
        borderRadius: 8,
        color: "black",
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
