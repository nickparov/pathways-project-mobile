import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
    Keyboard,
    StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

// components
import HeaderText from "../components/HeaderText";
import AccountLogo from "../components/AccountLogo";
import NotificationLogo from "../components/NotificationLogo";
import TopBarBtn from "../components/TopBar";
import DismissKeyboard from "../components/DismissKeyboard";
import SingleChat from "../components/SingleChat";
import GlobalState from "../GlobalState";
import generateRandNum from "../Misc";

const ChatMessageElement = ({ message, isLeft, nextIsDifferent }) => {
    return (
        <View
            style={{
                backgroundColor: isLeft ? "#F36825" : "#363636",
                paddingHorizontal: 24,
                paddingVertical: 9,
                borderRadius: 24,
                alignSelf: isLeft ? "flex-start" : "flex-end",
                marginBottom: nextIsDifferent ? 25 : 10,
            }}
        >
            <Text style={{ color: "white" }}>{message}</Text>
        </View>
    );
};

export default class OngoingChatScreen extends React.Component {
    state = {
        userMessage: "",
        keyboardOffset: 0,
    };

    updateMessageInput = (val) => {
        this.setState({ ...this.state, userMessage: val });
    };

    messages = [
        {
            message: "Hey how are you?",
            isLeft: true,
            nextIsDifferent: true,
        },
        {
            message: "I am good, what about you?",
            isLeft: false,
            nextIsDifferent: false,
        },
        {
            message: "Did you fix that?",
            isLeft: false,
            nextIsDifferent: true,
        },
        {
            message: "I am still working, would you be able to help?",
            isLeft: true,
            nextIsDifferent: false,
        },
        {
            message: "I can explain to you really qucikly.",
            isLeft: true,
            nextIsDifferent: false,
        },
    ];

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            this._keyboardDidShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            this._keyboardDidHide
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = (event) => {
        this.setState({
            ...this.state,
            keyboardOffset: 1,
        });
    };

    _keyboardDidHide = () => {
        this.setState({
            ...this.state,
            keyboardOffset: 0,
        });
    };

    SubmitMessageHandler = () => {
        this.messages.push({
            message: this.state.userMessage,
            isLeft: false,
        });

        // clear userMessage
        this.setState({
            ...this.state,
            userMessage: "",
        });
    };

    render() {
        return (
            <DismissKeyboard>
                <SafeAreaView>
                    <AccountLogo />
                    <NotificationLogo />
                    <StatusBar
                        animated={true}
                        backgroundColor="#61dafb"
                        barStyle={"dark-content"}
                    />
                    <View style={{ marginTop: 90, flexDirection: "row" }}>
                        <View
                            style={{
                                flexDirection: "row",
                                marginLeft: 24,
                                width: 65,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    ...styles.Btn,
                                    ...styles.backStepBtn,
                                }}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        fontWeight: "700",
                                    }}
                                >
                                    {"<"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <SingleChat
                            from={"Viktor"}
                            lastOnline={"10:23 AM"}
                            style={{ flex: 1, marginLeft: 24, marginTop: 4 }}
                            imageSource={GlobalState.sources.profileLogos[generateRandNum(0, 4)]}
                        />
                    </View>
                    <View style={styles.container}>
                        {/* Chats section */}
                        <ScrollView
                            style={{
                                ...styles.ChatContainer,
                                height:
                                    this.state.keyboardOffset > 0 ? 230 : 430,
                            }}
                        >
                            {this.messages.map(
                                ({ message, isLeft, nextIsDifferent }, idx) => (
                                    <ChatMessageElement
                                        key={idx}
                                        message={message}
                                        isLeft={isLeft}
                                        nextIsDifferent={nextIsDifferent}
                                    />
                                )
                            )}
                        </ScrollView>
                    </View>
                    <View
                        style={{
                            position: "absolute",
                            width:
                                this.state.keyboardOffset > 0 ? "98%" : "100%",
                            paddingLeft:
                                this.state.keyboardOffset > 0 ? 15 : 15,
                            bottom:
                                this.state.keyboardOffset > 0
                                    ? this.state.keyboardOffset
                                    : this.state.keyboardOffset - 55,
                            flexDirection: "row",
                        }}
                    >
                        <TextInput
                            style={{
                                backgroundColor:
                                    this.state.keyboardOffset > 0
                                        ? "white"
                                        : "transparent",
                                marginHorizontal:
                                    this.state.keyboardOffset > 0 ? 0 : 10,
                                ...styles.input,
                                flex: 6,
                                borderRadius: 6,
                            }}
                            onSubmitEditing={Keyboard.dismiss}
                            onChangeText={this.updateMessageInput}
                            autoComplete={"off"}
                            value={this.state.userMessage}
                            secureTextEntry={false}
                            placeholder="Search"
                        />
                        <TouchableOpacity
                            style={{
                                ...styles.Btn,
                                ...styles.backStepBtn,
                                flex: 1,
                                alignSelf: "flex-end",
                                marginRight:
                                    this.state.keyboardOffset > 0 ? 0 : 5,
                                backgroundColor: "transparent",
                            }}
                            onPress={this.SubmitMessageHandler}
                        >
                            {/* <Text
                                style={{
                                    color: "white",
                                    fontWeight: "700",
                                }}
                            >
                                {"C"}
                            </Text> */}
                            <Feather
                                name="arrow-up-circle"
                                size={32}
                                color={"#667080"}
                            />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </DismissKeyboard>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: 0,
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
        height: 56,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 15,
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
        height: 430,
        paddingRight: 10,
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
