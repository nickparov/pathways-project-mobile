import * as React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// components
import { Feather, Ionicons } from "@expo/vector-icons";

// Screens
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import ConnectScreen from "./screens/ConnectScreen";
import OngoingChatScreen from "./screens/OngoingChatScreen";
import PersonProfileScreen from "./screens/PersonProfileScreen";
import BlogScreen from "./screens/BlogScreen";
import HackathonScreen from "./screens/HackathonScreen";
import PractiseScreen from "./screens/PractiseScreen";

// Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen
                        name="OngoingChat"
                        component={OngoingChatScreen}
                    />
                    <Stack.Screen
                        name="PersonProfile"
                        component={PersonProfileScreen}
                    />
                    <Stack.Screen name="Blog" component={BlogScreen} />
                    <Stack.Screen
                        name="Hackathon"
                        component={HackathonScreen}
                    />
                    <Stack.Screen name="Practise" component={PractiseScreen} />
                    <Stack.Screen name="Main">
                        {() => (
                            <Tab.Navigator
                                initialRouteName="Home"
                                screenOptions={{
                                    headerShown: false,
                                    tabBarStyle: { height: 85 },
                                }}
                            >
                                <Tab.Screen
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <Feather
                                                name="home"
                                                size={size}
                                                color={color}
                                            />
                                        ),
                                    }}
                                    name="Home"
                                    component={HomeScreen}
                                />
                                <Tab.Screen
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <Ionicons
                                                name="chatbubble-outline"
                                                size={size}
                                                color={color}
                                            />
                                        ),
                                    }}
                                    name="Chats"
                                    component={ChatScreen}
                                />
                                <Tab.Screen
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <Feather
                                                name="users"
                                                size={size}
                                                color={color}
                                            />
                                        ),
                                    }}
                                    name="Connect"
                                    component={ConnectScreen}
                                />
                            </Tab.Navigator>
                        )}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
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
});
