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
import { Feather } from "@expo/vector-icons";
import BlogElement from "../components/BlogElement";
import generateRandNum from "../Misc";
import GlobalState from "../GlobalState";

const RateNumberElement = ({ val, text, isLast }) => {
    return (
        <View
            style={{
                borderBottomWidth: isLast ? 0 : 1,
                borderBottomColor: isLast ? "transparent" : "grey",
                marginBottom: 31,
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 24,
                }}
            >
                {val}
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    fontWeight: "300",
                    fontSize: 16,
                    paddingBottom: isLast ? 0 : 24,
                }}
            >
                {text}
            </Text>
        </View>
    );
};

export default PersonProfileScreen = ({ navigation }) => {
    const navigateToBlogScreen = () => navigation.navigate("Blog");
    const navigateToPersonProfileScreen = () =>
        navigation.push("PersonProfile");

    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableOpacity
                    style={{
                        ...styles.Btn,
                        ...styles.backStepBtn,
                        width: 72,
                        position: "absolute",
                        left: 20,
                        top: 10,
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
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                    barStyle={"dark-content"}
                />
                <View
                    style={{
                        marginTop: 90,
                        flexDirection: "column",
                        alignItems: "center",
                        marginHorizontal: 18,
                        backgroundColor: "white",
                        height: 220,
                        borderRadius: 33,
                        ...styles.shadowBox,
                    }}
                >
                    <Image
                        style={{
                            ...styles.ImageLogo,
                            position: "absolute",
                            top: -50,
                        }}
                        source={
                            GlobalState.sources.profileLogos[
                                generateRandNum(
                                    0,
                                    GlobalState.sources.profileLogos.length
                                )
                            ]
                        }
                    />
                    <Text
                        style={{
                            fontWeight: "700",
                            fontSize: 20,
                            marginTop: 64,
                        }}
                    >
                        Thomas R.
                    </Text>

                    <Text style={{ marginTop: 10 }}>
                        Graduating soon! CS is my passion.
                    </Text>
                    <Text>Happy to help you with any problem. Hmu</Text>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 16,
                            paddingHorizontal: 15,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                ...styles.Btn,
                                flex: 5,
                                height: 45,
                                marginHorizontal: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "700",
                                    color: "white",
                                }}
                            >
                                Edit Profile
                            </Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffe3c4",
                                width: 45,
                                height: 45,
                                borderRadius: 12,
                            }}
                        >
                            <Feather name="bell" size={24} color={"#F36825"} />
                        </View>
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
                    {/* Likes, Following, Follwoers */}
                    <View
                        style={{
                            flexDirection: "column",
                            paddingTop: 35,
                            backgroundColor: "#F8F9FC",
                            paddingHorizontal: 19,
                            borderRadius: 21,
                            alignSelf: "flex-start",
                        }}
                    >
                        <RateNumberElement text={"Likes"} val={"10K"} />
                        <RateNumberElement text={"Likes"} val={"10K"} />
                        <RateNumberElement
                            text={"Likes"}
                            val={"10K"}
                            isLast={true}
                        />
                    </View>
                    {/* Friends */}
                    <View
                        style={{
                            flexDirection: "column",
                            paddingTop: 10,
                            paddingLeft: 19,
                            flex: 1,
                        }}
                    >
                        <Text style={{ ...styles.header2Text }}>Friends</Text>
                        <View style={{ flexDirection: "row", paddingTop: 14 }}>
                            <TouchableOpacity
                                onPress={navigateToPersonProfileScreen}
                            >
                                <Image
                                    style={{
                                        ...styles.PersonLogoImage,
                                    }}
                                    source={GlobalState.sources.profileLogos[generateRandNum(0, 4)]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    ...styles.PersonLogoImage,
                                    marginLeft: 15,
                                }}
                                onPress={navigateToPersonProfileScreen}
                            >
                                <Image
                                    style={{
                                        ...styles.PersonLogoImage,
                                    }}
                                    source={GlobalState.sources.profileLogos[generateRandNum(0, 4)]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    ...styles.PersonLogoImage,
                                    marginLeft: 15,
                                }}
                                onPress={navigateToPersonProfileScreen}
                            >
                                <Image
                                    style={{
                                        ...styles.PersonLogoImage,
                                    }}
                                    source={GlobalState.sources.profileLogos[generateRandNum(0, 4)]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    ...styles.PersonLogoImage,
                                    marginLeft: 15,
                                }}
                                onPress={navigateToPersonProfileScreen}
                            >
                                <Image
                                    style={{
                                        ...styles.PersonLogoImage,
                                    }}
                                    source={GlobalState.sources.profileLogos[generateRandNum(0, 4)]}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Popular Blogs */}
                        <Text
                            style={{
                                ...styles.header2Text,
                                paddingTop: 22,
                                paddingBottom: 5,
                            }}
                        >
                            Popular Blogs
                        </Text>
                        <BlogElement onClick={navigateToBlogScreen} />
                        <BlogElement
                            onClick={navigateToBlogScreen}
                            style={{ marginTop: 10 }}
                        />
                        <BlogElement
                            onClick={navigateToBlogScreen}
                            style={{ marginTop: 10 }}
                        />
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
