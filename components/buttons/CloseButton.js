import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const CloseButton = (props) => {
  // Prop Destructuring
  const { onPress = () => {} } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo name="circle-with-cross" size={26} color="red" />
    </TouchableOpacity>
  );
};

export default CloseButton;

const styles = StyleSheet.create({});
