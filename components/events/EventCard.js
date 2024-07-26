import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import CloseButton from "../buttons/CloseButton";
import moment from "moment";

// Context Variables
import { RootContext } from "../../context/RootContext";

const EventCard = (props) => {
  // Prop Destructuring
  const { id = null, title = "", description = "", date = "" } = props;

  // Context Variables
  const { handleEventDelete } = useContext(RootContext);

  return (
    <View style={styles.eventCardContainer}>
      <View style={styles.eventHeaderContainer}>
        <Text style={styles.eventTitleText}>{title}</Text>
        <Text style={styles.eventDateText}>
          {moment(date).format("DD MMM YYYY")}
        </Text>
      </View>
      <View>
        <Text style={styles.eventDescText}>{description}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.deleteButtonContainer}>
        <CloseButton onPress={() => handleEventDelete(id)} />
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  eventCardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    marginVertical: 10,
    marginHorizontal: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  eventHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventTitleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eventDateText: {
    fontSize: 12,
    color: "grey",
    fontWeight: "600",
  },
  eventDescText: {
    fontSize: 14,
    fontWeight: "400",
    paddingTop: 10,
  },
  deleteButtonContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    position: "absolute",
    top: -8,
    right: -8,
  },
});
