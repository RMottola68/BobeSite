import './App.css';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navigation from "./Navigation"
import BobeBackground from "./assets/BobeBackground.png"
import Landing from "./Landing";

function App() {

  const sectionStyle = {
    backgroundImage: `url(${BobeBackground})`,
    height: "100vh",
    width: "100vw",
    backgroundAttachment: "fixed",
    overflowX: "hidden",
    overflowY: "scroll"
  }

  return (
    <div className="App " style={sectionStyle}>
        <Navigation />
        <Routes >
          
          <Route path="*" element={<Navigate to="/" replace/>} />
          <Route path="/" element={<Landing />} />
        </Routes>
    </div>
  );
}

export default App;
