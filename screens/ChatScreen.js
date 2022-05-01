import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
    StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import HeaderText from "../components/HeaderText";
import AccountLogo from "../components/AccountLogo";
import NotificationLogo from "../components/NotificationLogo";
import TopBarBtn from "../components/TopBar";
import DismissKeyboard from "../components/DismissKeyboard";
import SingleChat from "../components/SingleChat";
import GlobalState from "../GlobalState";
import generateRandNum from "../Misc";

export default function ChatScreen({ navigation }) {
    const [SelectedTopMenu, updateSelectedTopMenu] = React.useState(0);
    const [SearchTerm, updateSearchTerm] = React.useState("");

    const navigateToOngoingChatScreen = () => {
        navigation.navigate("OngoingChat");
    };

    const navigateToPersonProfileScreen = () => {
        navigation.navigate("PersonProfile");
    }

    const topBarSelectors = ["Friends", "Groups"];
    let chats = [
        {
            from: "Emma",
            message: "How are you?",
            time: "10:50PM",
        },
        {
            from: "Nick",
            message: "I know your secrets.",
            time: "10:50PM",
        },
        {
            from: "Matt",
            message: "Hello",
            time: "10:50PM",
        },
        {
            from: "Henry",
            message: "How about some beer?",
            time: "10:50PM",
        },
        {
            from: "Alice",
            message: "I am in wonderland",
            time: "10:50PM",
        },
        {
            from: "Emma",
            message: "How are you?",
            time: "10:50PM",
        },
        {
            from: "Nick",
            message: "I know your secrets.",
            time: "10:50PM",
        },
        {
            from: "Matt",
            message: "Hello",
            time: "10:50PM",
        },
        {
            from: "Henry",
            message: "How about some beer?",
            time: "10:50PM",
        },
        {
            from: "Alice",
            message: "I am in wonderland",
            time: "10:50PM",
        },
    ];

    let groupChats = [
        {
            from: "UIC CS ",
            message: "How are you?",
            time: "10:50PM",
        },
        {
            from: "Google analysts",
            message: "I know your secrets.",
            time: "10:50PM",
        },
        {
            from: "Hackaton People",
            message: "Hello",
            time: "10:50PM",
        },
        {
            from: "Google analysts",
            message: "How about some beer?",
            time: "10:50PM",
        },
        {
            from: "Wonderlands",
            message: "I am in wonderland",
            time: "10:50PM",
        },
        {
            from: "UIC CS ",
            message: "How are you?",
            time: "10:50PM",
        },
        {
            from: "Nick's Group",
            message: "I know your secrets.",
            time: "10:50PM",
        },
    ];

    let listToRender = null;

    let chatTextToRender = SelectedTopMenu === 0 ? "Chats" : "Groups";

    if (SelectedTopMenu === 0)
        listToRender = chats.map(({ from, message, time }, idx) => (
            <SingleChat
                key={idx}
                from={from}
                message={`${message.slice(0, 15)}...`}
                time={time}
                onClick={navigateToOngoingChatScreen}
                imageSource={GlobalState.sources.profileLogos[generateRandNum(0, 4)]}
            />
        ));

    if (SelectedTopMenu === 1)
        listToRender = groupChats.map(({ from, message, time }, idx) => (
            <SingleChat
                key={idx}
                from={from}
                message={`${message.slice(0, 15)}...`}
                time={time}
                onClick={navigateToOngoingChatScreen}
                imageSource={GlobalState.sources.companyLogos[generateRandNum(0, 4)]}
            />
        ));

    if (SearchTerm.length > 0) {
        chats = chats.filter((chat) => chat.from.includes(SearchTerm));
        groupChats = groupChats.filter((chat) =>
            chat.from.includes(SearchTerm)
        );

        listToRender =
            SelectedTopMenu === 0
                ? chats.map(({ from, message, time }, idx) => (
                      <SingleChat
                          key={idx}
                          from={from}
                          message={`${message.slice(0, 15)}...`}
                          time={time}
                          onClick={navigateToOngoingChatScreen}
                      />
                  ))
                : groupChats.map(({ from, message, time }, idx) => (
                      <SingleChat
                          key={idx}
                          from={from}
                          message={`${message.slice(0, 15)}...`}
                          time={time}
                          onClick={navigateToOngoingChatScreen}
                      />
                  ));
    }

    return (
        <DismissKeyboard>
            <SafeAreaView>
                <AccountLogo onClick={navigateToPersonProfileScreen} />
                <NotificationLogo />
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                    barStyle={"dark-content"}
                />
                <HeaderText
                    text=""
                    style={{
                        position: "absolute",
                        fontSize: 24,
                        fontWeight: 700,
                        top: 65,
                        left: 24,
                    }}
                />
                <View style={{ marginTop: 90 }}>
                    <View style={{ flexDirection: "row" }}>
                        {topBarSelectors.map((option, idx) => (
                            <TopBarBtn
                                idx={idx}
                                key={idx}
                                clickHandler={updateSelectedTopMenu}
                                text={option}
                                selected={idx === SelectedTopMenu}
                            />
                        ))}
                    </View>
                </View>
                <View style={styles.container}>
                    {/* Input */}
                    <TextInput
                        style={styles.input}
                        onChangeText={updateSearchTerm}
                        value={SearchTerm}
                        secureTextEntry={false}
                        autoComplete="email"
                        keyboardType="email-address"
                        placeholder="Search"
                    />
                    {/* Chats section */}
                    <Text style={styles.ChatsSectionText}>
                        {chatTextToRender}
                    </Text>
                    <ScrollView style={styles.ChatContainer}>
                        {listToRender}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </DismissKeyboard>
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
