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

export default function ConnectScreen({ navigation }) {
    const [SelectedTopMenu, updateSelectedTopMenu] = React.useState(0);
    const [SearchTerm, updateSearchTerm] = React.useState("");

    const navigateToPersonProfileScreen = () => {
        navigation.navigate("PersonProfile");
    };

    const topBarSelectors = ["Connections", "Requests"];

    let conns = [
        {
            from: "Emma",
        },
        {
            from: "Nick",
        },
        {
            from: "Matt",
        },
        {
            from: "Henry",
        },
        {
            from: "Alice",
        },
        {
            from: "Emma",
        },
        {
            from: "Nick",
        },
        {
            from: "Matt",
        },
        {
            from: "Henry",
        },
        {
            from: "Alice",
        },
    ];

    let reqs = [
        {
            from: "UIC CS ",
        },
        {
            from: "Google analysts",
        },
        {
            from: "Hackaton People",
        },
        {
            from: "Google analysts",
        },
        {
            from: "Wonderlands",
        },
        {
            from: "UIC CS ",
        },
        {
            from: "Nick's Group",
        },
    ];

    let listToRender = null;

    let chatTextToRender =
        SelectedTopMenu === 0 ? "Friends" : "Pending Requests";

    if (SelectedTopMenu === 0)
        listToRender = conns.map(({ from }, idx) => (
            <SingleChat
                key={idx}
                from={from}
                onClick={navigateToPersonProfileScreen}
                imageSource={GlobalState.sources.profileLogos[generateRandNum(0, 4)]}
            />
        ));

    if (SelectedTopMenu === 1)
        listToRender = reqs.map(({ from }, idx) => (
            <SingleChat
                key={idx}
                from={from}
                onClick={navigateToPersonProfileScreen}
                imageSource={GlobalState.sources.companyLogos[generateRandNum(0, 4)]}
            />
        ));

    if (SearchTerm.length > 0) {
        conns = conns.filter((chat) => chat.from.includes(SearchTerm));
        reqs = reqs.filter((chat) => chat.from.includes(SearchTerm));

        listToRender =
            SelectedTopMenu === 0
                ? conns.map(({ from }, idx) => (
                      <SingleChat key={idx} from={from} />
                  ))
                : reqs.map(({ from }, idx) => (
                      <SingleChat key={idx} from={from} />
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
