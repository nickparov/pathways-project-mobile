import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    StatusBar,
    ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import BlogElement from "../components/BlogElement";

export default BlogScreen = ({ navigation }) => {
    const navigateToBlogScreen = () => navigation.navigate("Blog");
    const navigateToPersonProfileScreen = () =>
        navigation.push("PersonProfile");

    const [heartClicked, updateHeartClick] = React.useState(false)

    return (
        <SafeAreaView>
            <ScrollView style={{ minHeight: 800 }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                    barStyle={"dark-content"}
                />
                <View
                    style={{
                        flexDirection: "row",
                        paddingTop: 25,
                        paddingLeft: 27,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            ...styles.Btn,
                            ...styles.backStepBtn,
                            width: 72,
                            flex: 1,
                        }}
                        onPress={() => navigation.goBack()}
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
                    <View style={{ flex: 5, justifyContent: "center" }}>
                        <Text
                            style={{ ...styles.header2Text, paddingLeft: 24 }}
                        >
                            Blog
                        </Text>
                    </View>
                </View>

                {/* Separate Section */}
                <View
                    style={{
                        flexDirection: "row",
                        paddingHorizontal: 20,
                        marginTop: 17,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            paddingTop: 10,
                            flex: 1,
                        }}
                    >
                        {/* Popular Blogs */}
                        <BlogElement
                            style={{
                                marginTop: 10,
                                height: 160,
                                ...styles.shadowBox,
                            }}
                        />
                        <View style={{flexDirection: "row", paddingTop: 15}}>
                            <Text
                                style={{
                                    ...styles.header2Text
                                }}
                            >
                                How to make a perfect startup pitch
                            </Text>
                            <TouchableOpacity onPress={() => updateHeartClick(!heartClicked)}>
                                <FontAwesome name={heartClicked ? "heart" : "heart-o"} size={24} color={"#F36825"} style={{paddingLeft: 10, paddingTop: 2}} />
                            </TouchableOpacity>
                        </View>

                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: "400",
                                paddingTop: 10,
                            }}
                        >
                            by @emma_r
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: "400",
                                paddingTop: 20,
                            }}
                        >
                            Pitching is not just for entrepreneurs seeking
                            investor funding. We all have to pitch in one way or
                            another, whether pitching a change initiative to
                            your team or a proposal to the board. We all need to
                            influence someone to adopt our ideas and give us the
                            go-ahead. Pitching is the most nerve-wracking part
                            of the idea creation process, and few excel at it,
                            but it doesn't need to be so difficult. Follow these
                            12 pointers for the perfect pitch.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

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
        width: 95,
        height: 95,
        borderRadius: 47.5,
    },
    PersonLogoImage: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
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
    header2Text: {
        fontWeight: "700",
        fontSize: 18,
    },
});
