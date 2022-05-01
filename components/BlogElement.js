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
import GlobalState from "../GlobalState";
import generateRandNum from "../Misc";


export default BlogElement = ({ style, onClick, text, imageSource }) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <ImageBackground
                source={
                    imageSource ? imageSource : GlobalState.sources.blogs[
                        generateRandNum(0, GlobalState.sources.blogs.length-1)
                    ]
                }
                imageStyle={{ borderRadius: 19 }}
                resizeMode="cover"
                style={{
                    backgroundColor: "skyblue",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 100,
                    borderRadius: 19,
                    ...style,
                }}
            >
                <Text style={styles.text}>{text}</Text>
            </ImageBackground>
        </TouchableOpacity>
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
