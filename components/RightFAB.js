import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";
  
const RightFAB = (props) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
};
  
export default RightFAB;
  
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#02ab56",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});