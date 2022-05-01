import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";



export default function AccountLogo({ onClick }) {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                backgroundColor: "#F36825",
                position: "absolute",
                top: 64,
                right: 28,
            }}
            onPress={onClick}
        >
            <Feather
                style={{ marginLeft: 8, marginTop: 6 }}
                name="user"
                size={24}
                color={"white"}
            />
        </TouchableOpacity>
    );
};


