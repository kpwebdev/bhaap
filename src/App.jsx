import UserDetails from "./components/UserDetails.component";
import Records from "./components/Records.component";
import BhapRecorder from "./components/BhapRecorder.component";
import { useState } from "react";

function App() {
  const [records, setRecords] = useState(
    localStorage.getItem("records") != null
      ? JSON.parse(localStorage.getItem("records"))
      : []
  );

  return (
    <>
      <UserDetails />
      <BhapRecorder records={records} setRecords={setRecords} />
      <Records records={records} />
    </>
  );
}

export default App;
