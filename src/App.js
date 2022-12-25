import Postview from "./components/postview/Postview";
import Landingpage from "./components/LandingPage/landing_page";
import Form from "./components/Form/form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/postview" element={<Postview />} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



