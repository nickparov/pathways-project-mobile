import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function NotificationLogo() {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                position: "absolute",
                top: 64,
                right: 75,
            }}
            onPress={() => console.log(true)}
        >
            <Feather
                style={{ marginLeft: 8, marginTop: 6 }}
                name="bell"
                size={24}
                color={"#667080"}
            />
        </TouchableOpacity>
    );
}
