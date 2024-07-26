import { createContext, useState } from "react";

export const RootContext = createContext({});

const RootContextProvider = ({ children }) => {
  // Global State Variables
  const [openModal, setOpenModal] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Global functions
  const handleEventSave = () => {
    const eventDetails = {
      id: eventList.length + 1,
      title,
      description,
      date: selectedDate,
    };

    setEventList((prevState) => [...prevState, eventDetails]);

    // Resetting all values after save
    setTitle("");
    setDescription("");
    setSelectedDate("");
    setOpenModal(false);
  };

  const handleEventDelete = (eventId) => {
    const selectedEvent = eventList.find((event) => event?.id === eventId); // Checking if the event exists

    if (selectedEvent) {
      const filteredEvents = eventList.filter((event) => event?.id !== eventId); // Filtereing out the event

      setEventList(filteredEvents);
    }
  };

  return (
    <RootContext.Provider
      value={{
        // Global State
        openModal,
        eventList,
        title,
        description,
        selectedDate,
        setOpenModal,
        setEventList,
        setTitle,
        setDescription,
        setSelectedDate,
        // Global Functions
        handleEventSave,
        handleEventDelete,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
