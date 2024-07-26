import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const FilledButton = ({
  title = "Button",
  onPress = () => {},
  color = "cyan",
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.filledButton, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={styles.filledButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;

const styles = StyleSheet.create({
  filledButton: {
    // backgroundColor: "cyan",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  filledButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
