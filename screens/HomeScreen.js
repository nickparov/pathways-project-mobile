import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

// components
import HeaderText from "../components/HeaderText";
import AccountLogo from "../components/AccountLogo";
import NotificationLogo from "../components/NotificationLogo";
import LogoTextElement from "../components/LogoTextElement";
import TopBarBtn from "../components/TopBar";
import BlogElement from "../components/BlogElement";
import Jumbotron from "../components/Jumbotron";
import ClickableText from "../components/ClickableText";
import ClickableImage from "../components/ClickableImage";
import GlobalState from "../GlobalState";
import generateRandNum from "../Misc";
import { useAssets } from "expo-asset";

const ClickableLogoImage = ({ onClick, style, imageSource }) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <Image
                style={{
                    ...styles.PersonLogoImage,
                    ...style,
                }}
                source={
                    imageSource
                        ? imageSource
                        : {
                              uri: "https://reactnative.dev/img/tiny_logo.png",
                          }
                }
            />
        </TouchableOpacity>
    );
};

export default function HomeScreen({ navigation }) {

    const [SelectedTopMenu, updateSelectedTopMenu] = React.useState(0);
    const navigateToBlogScreen = () => navigation.navigate("Blog");
    const navigateToHackathonScreen = () => navigation.navigate("Hackathon");
    const navigateToPractiseScreen = () => navigation.navigate("Practise");
    const navigateToPersonProfileScreen = () =>
        navigation.navigate("PersonProfile");

    const topBarSelectors = ["News", "Hackatons", "Blogs"];
    // Unemployed
    if (!GlobalState.user.employed) {
        topBarSelectors.push("Practise");
    }

    let toRender = null;

    // News section
    if (SelectedTopMenu === 0) {
        toRender = (
            <ScrollView>
                <Jumbotron
                    style={{
                        paddingHorizontal: 24,
                        marginTop: 24,
                        marginHorizontal: 24,
                        ...styles.shadowBox,
                    }}
                >
                    <Text
                        style={{
                            ...styles.header2Text,
                            color: "white",
                            fontSize: 32,
                        }}
                    >
                        5 Hackatons
                    </Text>
                    <Text style={{ color: "white", paddingTop: 5 }}>
                        Were taken for the past month! 🎉
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: 14 }}>
                        <TouchableOpacity
                            style={{
                                ...styles.loginBtn,
                                backgroundColor: "#FFFFFF",
                                flex: 1,
                                marginRight: 8,
                            }}
                            disabled={false}
                        >
                            <Text style={{ ...styles.header2Text }}>
                                Find New +
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                ...styles.loginBtn,
                                backgroundColor: "#d6d6d6",
                                flex: 1,
                            }}
                            disabled={true}
                        >
                            <Text style={{ ...styles.header2Text }}>
                                Analytics
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Jumbotron>
                <View
                    style={{
                        paddingHorizontal: 24,
                        marginTop: 25,
                        paddingBottom: 130,
                    }}
                >
                    <Text>Interview question sets</Text>
                    <LogoTextElement
                        headerText={"Get hired by google"}
                        text={"Tomorrow, 12:00 PM"}
                        imageSource={
                            GlobalState.sources.companyLogos[
                                generateRandNum(0, 4)
                            ]
                        }
                    />
                    <LogoTextElement
                        headerText={"Amazon is waiting"}
                        text={"1 April, 1:00 PM"}
                        imageSource={
                            GlobalState.sources.companyLogos[
                                generateRandNum(0, 4)
                            ]
                        }
                    />

                    <Text style={{ marginTop: 36, paddingBottom: 16 }}>
                        Blogs for you
                    </Text>

                    <BlogElement onClick={navigateToBlogScreen} />
                    <BlogElement style={{ marginTop: 16 }} />
                    <BlogElement style={{ marginTop: 16 }} />
                </View>
            </ScrollView>
        );
    }

    // Hackathons section
    if (SelectedTopMenu === 1) {
        toRender = (
            <ScrollView>
                <View
                    style={{
                        paddingHorizontal: 24,
                        marginTop: 25,
                        paddingBottom: 130,
                    }}
                >
                    <Text style={{ paddingBottom: 16 }}>
                        Create a Hackathon
                    </Text>
                    <BlogElement
                        onClick={navigateToHackathonScreen}
                        style={{ marginBottom: 16 }}
                        imageSource={
                            GlobalState.sources.hackLogos[generateRandNum(0, 2)]
                        }
                    />

                    <Text>Upcoming Hackathons</Text>
                    <LogoTextElement
                        headerText={"MLH Chicago"}
                        text={"Tomorrow, 12:00 PM"}
                        imageSource={
                            GlobalState.sources.companyLogos[
                                generateRandNum(0, 4)
                            ]
                        }
                    />
                    <LogoTextElement
                        headerText={"UIC Hack"}
                        text={"1 April, 1:00 PM"}
                        imageSource={
                            GlobalState.sources.companyLogos[
                                generateRandNum(0, 4)
                            ]
                        }
                    />

                    <Text style={{ marginTop: 36, paddingBottom: 16 }}>
                        Blogs for you
                    </Text>

                    <BlogElement onClick={navigateToBlogScreen} />
                    <BlogElement
                        onClick={navigateToBlogScreen}
                        style={{ marginTop: 16 }}
                    />
                    <BlogElement
                        onClick={navigateToBlogScreen}
                        style={{ marginTop: 16 }}
                    />

                    <Text style={{ marginTop: 36, paddingBottom: 16 }}>
                        Calendar of free dates
                    </Text>
                    <Calendar style={{ borderRadius: 20, paddingBottom: 6 }} />
                </View>
            </ScrollView>
        );
    }

    // Blog section
    if (SelectedTopMenu === 2) {
        toRender = (
            <ScrollView>
                <View
                    style={{
                        paddingHorizontal: 24,
                        marginTop: 25,
                        paddingBottom: 130,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 18,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                ...styles.loginBtn,
                                backgroundColor: "#F36825",
                                alignSelf: "flex-start",
                                paddingHorizontal: 24,
                            }}
                            disabled={false}
                        >
                            <Text
                                style={{
                                    color: "white",
                                }}
                            >
                                Create New +
                            </Text>
                        </TouchableOpacity>

                        <ClickableText
                            style={{ alignSelf: "center" }}
                            text={"Sort And Filter"}
                            cb={() => {
                                console.log("clicked!");
                            }}
                        />
                    </View>

                    <Text style={{ paddingBottom: 16 }}>Popular Authors</Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <ClickableImage
                                onClick={navigateToPersonProfileScreen}
                                imageSource={
                                    GlobalState.sources.profileLogos[
                                        generateRandNum(
                                            0,
                                            GlobalState.sources.profileLogos
                                                .length
                                        )
                                    ]
                                }
                            />
                            <Text style={{ textAlign: "center" }}>@Hello</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 8 }}>
                            <ClickableImage
                                onClick={navigateToPersonProfileScreen}
                                imageSource={
                                    GlobalState.sources.profileLogos[
                                        generateRandNum(
                                            0,
                                            GlobalState.sources.profileLogos
                                                .length
                                        )
                                    ]
                                }
                            />
                            <Text style={{ textAlign: "center" }}>@nick_</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 8 }}>
                            <ClickableImage
                                onClick={navigateToPersonProfileScreen}
                                imageSource={
                                    GlobalState.sources.profileLogos[
                                        generateRandNum(
                                            0,
                                            GlobalState.sources.profileLogos
                                                .length
                                        )
                                    ]
                                }
                            />
                            <Text style={{ textAlign: "center" }}>
                                @alice_j
                            </Text>
                        </View>
                    </View>

                    <Text style={{ marginTop: 36, paddingBottom: 16 }}>
                        Blogs
                    </Text>

                    <BlogElement
                        onClick={navigateToBlogScreen}
                        text={"How to make a startup pitch?"}
                    />
                    <BlogElement
                        onClick={navigateToBlogScreen}
                        style={{ marginTop: 16, ...styles.shadowBox }}
                        text={"How to code efficiently?"}
                    />
                    <BlogElement
                        onClick={navigateToBlogScreen}
                        style={{ marginTop: 16, ...styles.shadowBox }}
                        text={"What to do with burnout?"}
                    />
                </View>
            </ScrollView>
        );
    }

    // Practise section
    if (SelectedTopMenu === 3) {
        toRender = (
            <ScrollView>
                <View
                    style={{
                        paddingHorizontal: 24,
                        marginTop: 25,
                        paddingBottom: 130,
                    }}
                >
                    {/* <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 18,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                ...styles.loginBtn,
                                backgroundColor: "#F36825",
                                alignSelf: "flex-start",
                                paddingHorizontal: 24,
                            }}
                            disabled={false}
                        >
                            <Text
                                style={{
                                    color: "white",
                                }}
                            >
                                Create New +
                            </Text>
                        </TouchableOpacity>

                        <ClickableText
                            style={{ alignSelf: "center" }}
                            text={"Sort And Filter"}
                            cb={() => {
                                console.log("clicked!");
                            }}
                        />
                    </View> */}

                    <Text style={{ paddingBottom: 16 }}>
                        Popular Question Sets
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <ClickableImage
                                onClick={navigateToPractiseScreen}
                                imageSource={
                                    GlobalState.sources.practicePics[
                                        generateRandNum(0, 2)
                                    ]
                                }
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 8 }}>
                            <ClickableImage
                                onClick={navigateToPractiseScreen}
                                imageSource={
                                    GlobalState.sources.practicePics[
                                        generateRandNum(0, 2)
                                    ]
                                }
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 8 }}>
                            <ClickableImage
                                onClick={navigateToPractiseScreen}
                                imageSource={
                                    GlobalState.sources.practicePics[
                                        generateRandNum(0, 2)
                                    ]
                                }
                            />
                        </View>
                    </View>

                    <Text style={{ marginTop: 36, paddingBottom: 16 }}>
                        Practise by language.
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 16,
                        }}
                    >
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                        <ClickableLogoImage
                            imageSource={
                                GlobalState.sources.langIcons[
                                    generateRandNum(0, 5)
                                ]
                            }
                        />
                    </View>

                    <Text style={{ marginTop: 36, paddingBottom: 16 }}>
                        Practise by difficulty.
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigateToPractiseScreen()}
                            style={{
                                ...styles.loginBtn,
                                height: 48,
                                backgroundColor: "#F36825",
                                width: 103,
                            }}
                            disabled={false}
                        >
                            <Text
                                style={{
                                    fontWeight: "700",
                                    color: "white",
                                }}
                            >
                                Easy
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigateToPractiseScreen()}
                            style={{
                                ...styles.loginBtn,
                                height: 48,
                                backgroundColor: "#F36825",
                                width: 103,
                            }}
                            disabled={false}
                        >
                            <Text
                                style={{
                                    fontWeight: "700",
                                    color: "white",
                                }}
                            >
                                Medium
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigateToPractiseScreen()}
                            style={{
                                ...styles.loginBtn,
                                height: 48,
                                backgroundColor: "#F36825",
                                width: 103,
                            }}
                            disabled={false}
                        >
                            <Text
                                style={{
                                    fontWeight: "700",
                                    color: "white",
                                }}
                            >
                                Hard
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ marginTop: 36, paddingBottom: 16 }}>
                        Blogs about interview Practise
                    </Text>

                    <BlogElement onClick={navigateToBlogScreen} />
                    <BlogElement
                        onClick={navigateToBlogScreen}
                        style={{ marginTop: 16 }}
                    />
                </View>
            </ScrollView>
        );
    }

    return (
        <SafeAreaView>
            <AccountLogo onClick={() => navigation.navigate("PersonProfile")} />
            <NotificationLogo />
            <HeaderText
                text="Welcome!"
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

            {toRender}
        </SafeAreaView>
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
        borderRadius: 6,
        height: 34,
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
    PersonLogoImage: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
});
