import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Calendar from "expo-calendar";
import CalendarPicker from "react-native-calendar-picker";
import { Entypo } from "@expo/vector-icons";

// Components
import EventModal from "../components/modals/EventModal";
import EventCard from "../components/events/EventCard";

// Context
import { RootContext } from "../context/RootContext";

const CalendarScreen = (props) => {
  // Context Variables
  const { eventList, selectedDate, openModal, setOpenModal, setSelectedDate } =
    useContext(RootContext);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        // console.log("Here are all your calendars:");
        // console.log({ calendars });
      }
    })();
  }, []);

  const handleDateChange = (date) => {
    setOpenModal(true);
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      {/* Calendar Section */}
      <View style={styles.calendarContainer}>
        <CalendarPicker onDateChange={handleDateChange} />
      </View>

      {/* Event Modal */}
      <EventModal openModal={openModal} setOpenModal={setOpenModal} />

      {/* Events List */}
      <View style={styles.eventListContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {eventList?.length ? (
            eventList?.map((event) => (
              <EventCard
                key={event?.id}
                id={event?.id}
                title={event?.title}
                description={event?.description}
                date={event?.date}
              />
            ))
          ) : (
            <View style={styles.emptyTextContainer}>
              <Text style={styles.emptyText}>No events yet !</Text>
              <Text
                style={{ ...styles.emptyText, fontSize: 14, color: "grey" }}
              >
                Please create some events
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 50,
    // backgroundColor: "orange",
  },
  calendarContainer: {
    // backgroundColor: "red",
  },
  eventListContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "yellow",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  emptyTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
