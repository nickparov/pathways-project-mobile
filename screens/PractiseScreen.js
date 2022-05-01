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
import RadioButtonRN from "radio-buttons-react-native";
import ClickableImage from "../components/ClickableImage";
import GlobalState from "../GlobalState";
import generateRandNum from "../Misc";

export default PractiseScreen = ({ navigation }) => {
    const [step, updateStep] = React.useState(0);
    const [radioVal, updateRadioSelection] = React.useState(0);

    const data = [
        {
            val: 0,
            label: "if (x === 5) {...}",
        },
        {
            val: 1,
            label: "if (x == 5) {...}",
        },
        {
            val: 2,
            label: "if (x = 5) ...",
        },
        {
            val: 3,
            label: "if (x == 5) then ...",
        },
    ];

    let PractiseRender = null;

    if (step === 0)
        PractiseRender = (
            <View style={{ flexDirection: "column", paddingTop: 15 }}>
                <Text
                    style={{
                        fontWeight: "bold",
                        paddingTop: 12,
                        ...styles.header1Text,
                    }}
                >
                    Question 4
                </Text>
                <Text
                    style={{
                        fontWeight: "400",
                        paddingTop: 6,
                    }}
                >
                    How do you write a conditional statement that will only
                    execute the contained code if variable x has a value 5 of
                    type number?
                </Text>
                <RadioButtonRN
                    data={data}
                    selectedBtn={(e) => updateRadioSelection(e.val)}
                    box={false}
                    style={{ marginTop: 20 }}
                    initial={1}
                />
            </View>
        );

    if (step === 1)
        PractiseRender = (
            <View style={{ flexDirection: "column", paddingTop: 15 }}>
                <Text
                    style={{
                        fontWeight: "bold",
                        paddingTop: 12,
                        ...styles.header1Text,
                    }}
                >
                    Finished Hard Section
                </Text>
                <Text
                    style={{
                        fontWeight: "400",
                        paddingTop: 6,
                    }}
                >
                    Congrats! Keep believing in yourself and work hard; more
                    achievements are yet to come!
                </Text>
                <Text
                    style={{
                        fontWeight: "400",
                        marginTop: 16,
                    }}
                >
                    Other popular question sets
                </Text>
                <View style={{ flexDirection: "row", marginTop: 12, marginBottom: 36 }}>
                    <View style={{ flex: 1 }}>
                        <ClickableImage
                            imageSource={GlobalState.sources.practicePics[generateRandNum(0, 2)]}
                            onClick={() => navigation.push("Practise")}
                        />
                        <Text style={{ textAlign: "center" }}></Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <ClickableImage
                            imageSource={GlobalState.sources.practicePics[generateRandNum(0, 2)]}
                            onClick={() => navigation.push("Practise")}
                        />
                        <Text style={{ textAlign: "center" }}></Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <ClickableImage
                            imageSource={GlobalState.sources.practicePics[generateRandNum(0, 2)]}
                            onClick={() => navigation.push("Practise")}
                        />
                        <Text style={{ textAlign: "center" }}></Text>
                    </View>
                </View>
            </View>
        );

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
                            Practise
                        </Text>
                    </View>
                </View>

                {/* Separate Section */}
                <View
                    style={{
                        flexDirection: "column",
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
                        <Text>
                            Practise by difficulty:{" "}
                            <Text style={{ fontWeight: "bold" }}>Hard</Text>{" "}
                        </Text>

                        <View style={{ flexDirection: "row" }}>
                            <View
                                style={{
                                    flex: 6,
                                    borderBottomColor: "black",
                                    borderBottomWidth: 3,
                                    marginBottom: 5,
                                    marginRight: 12,
                                    alignSelf: "flex-end",
                                }}
                            ></View>
                            <Text style={{ flex: 1 }}>100%</Text>
                        </View>

                        {PractiseRender}
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                ...styles.loginBtn,
                                backgroundColor: "#F36825",
                                flex: 1,
                                marginTop: 20,
                            }}
                            disabled={false}
                            onPress={() => navigation.goBack()}
                        >
                            <Text
                                style={{
                                    ...styles.header2Text,
                                    color: "white",
                                }}
                            >
                                {"<"}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                ...styles.loginBtn,
                                backgroundColor: "#F36825",
                                flex: 4,
                                marginTop: 20,
                                marginLeft: 10,
                            }}
                            disabled={false}
                            onPress={() => step === 0 ? updateStep(1) : navigation.goBack()}
                        >
                            <Text
                                style={{
                                    ...styles.header2Text,
                                    color: "white",
                                }}
                            >
                                { step === 0 ? "Next" : "Finish"}
                            </Text>
                        </TouchableOpacity>
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
    header1Text: {
        fontSize: 32,
    },
});
