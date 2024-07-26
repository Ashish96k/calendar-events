// Context
import RootContextProvider from "./context/RootContext";

// Screens
import CalendarScreen from "./screens/CalendarScreen";

export default function App() {
  return (
    <RootContextProvider>
      <CalendarScreen />
    </RootContextProvider>
  );
}
