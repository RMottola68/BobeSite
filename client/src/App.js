import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes >
          
          {/* <Route path="*" element={<Navigate to="/home" replace/>} />
          <Route path="home" element={<Landing />} /> */}
        </Routes>
    </div>
  );
}

export default App;
