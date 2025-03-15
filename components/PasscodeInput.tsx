import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";



const PasscodeInput = () => {
    const [enteredPasscode, setEnteredPasscode] = useState("");
    const [selected,setSelected] = useState([]);
    const [increment,setIncrement] = useState(1);
    const opacity = useSharedValue(1);

    const handlePress = (num) => {
        if (enteredPasscode.length < 4) {

            setIncrement(increment + 1);
            setSelected((item) =>
                item.includes(increment) ? item: [...item, increment]
            );

            setEnteredPasscode((prev) =>  prev == "" ? num : prev + num  );
        }
    };

    const handleDelete = () => {
        if (enteredPasscode.length > 0) {
            setIncrement(increment - 1);
            setEnteredPasscode((prev) => prev.slice(0, -1));
            setSelected((prev) => prev.slice(0, -1));
        }
    };

    return (
        <>
        <View className="h-[30%] justify-center flex-row align-middle items-center gap-5">
            {[1, 2, 3,4].map((item) => (
                <View key={item} className={`h-5 rounded-xl w-5 ${
                    selected.includes(item) ? "bg-black" : "bg-gray-200"}`}></View>
            ))}
        </View>
            <View className="flex-wrap flex-row w-[250px] mx-auto gap-[5px]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "del", 0, "ok"].map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.key}
                        onPress={() => {
                            if (item === "del") handleDelete();
                            // else if (item === "ok") handleSubmit();
                            else handlePress(item.toString());
                        }}
                    >
                        <Text style={styles.keyText}>{item === "del" ? "⌫" : item === "ok" ? "✔️" : item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    )}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
    title: { fontSize: 24, marginBottom: 20 },
    dotsContainer: { flexDirection: "row", marginBottom: 20 },
    dot: { width: 15, height: 15, borderRadius: 7.5, borderWidth: 2, margin: 5, borderColor: "#333" },
    filledDot: { backgroundColor: "#333" },
    keypad: { width: 250, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
    key: { width: 70, height: 70, justifyContent: "center", alignItems: "center", backgroundColor: "#ddd", margin: 5, borderRadius: 35 },
    keyText: { fontSize: 24 },
});

export default PasscodeInput
