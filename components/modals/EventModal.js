import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import moment from "moment";

// Components
import CloseButton from "../buttons/CloseButton";
import FilledButton from "../buttons/FilledButton";

// Context
import { RootContext } from "../../context/RootContext";

const EventModal = (props) => {
  // Prop Destructuring
  const { openModal, setOpenModal } = props;

  // Context Variables
  const {
    title,
    description,
    selectedDate,
    setTitle,
    setDescription,
    setSelectedDate,
    handleEventSave,
  } = useContext(RootContext);

  const closeModalHandler = () => {
    setOpenModal(false);
    setSelectedDate(""); // Clearing the selected date when modal closes
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={openModal}
      onRequestClose={closeModalHandler}
    >
      <View style={styles.modalContainer}>
        {/* Modal Header */}
        <View style={styles.modalHeader}>
          <View style={styles.modalTitleContainer}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>New Event</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <CloseButton onPress={closeModalHandler} />
          </View>
        </View>

        {/* Modal Body */}
        <View style={styles.modalBodyContainer}>
          <View style={styles.modalFormRow}>
            <Text>Title</Text>
            <TextInput
              style={styles.modalFormInput}
              placeholder="Please type title"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={styles.modalFormRow}>
            <Text>Desc</Text>
            <TextInput
              style={styles.modalFormInput}
              placeholder="Please type description"
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={styles.modalFormRow}>
            <Text>Date</Text>
            <TextInput
              style={styles.modalFormInput}
              placeholder="Please type date"
              editable={false}
              value={moment(selectedDate).format("DD-MMM-YYYY")}
            />
          </View>

          <FilledButton title="SAVE" onPress={handleEventSave} />
        </View>
      </View>
    </Modal>
  );
};

export default EventModal;

const styles = StyleSheet.create({
  modalContainer: {
    height: "40%",
    alignItems: "center",
    // justifyContent: "center",
    top: "25%",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
  },
  modalHeader: {
    flexDirection: "row",
    width: "100%",
  },
  modalTitleContainer: { flex: 10, alignItems: "center", paddingVertical: 10 },
  modalButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  modalBodyContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  modalFormRow: {
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalFormInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "grey",
    width: "80%",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
