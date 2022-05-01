import * as React from "react";
import { StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default ClickableImage = ({ onClick, imageSource }) => (
    <TouchableOpacity onPress={onClick}>
        <ImageBackground
            source={
                imageSource
                    ? imageSource
                    : require("../assets/blog-pics/blog-6.jpg")
            }
            imageStyle={{ borderRadius: 19 }}
            resizeMode="cover"
            style={{
                backgroundColor: "skyblue",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                borderRadius: 19,
            }}
        ></ImageBackground>
    </TouchableOpacity>
);
