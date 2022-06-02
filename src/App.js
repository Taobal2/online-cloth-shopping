import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signIn/signIn.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/home" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
