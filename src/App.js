import { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
      <Navbar title="TestUtils" aboutText="About TestUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container py-3">
        <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyse" />
      </div>

      {/* <BrowserRouter>
        <Navbar title="TestUtils" aboutText="About TestUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container py-3">
          <Routes>
            <Route exact path="/text-form" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyse" />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter> */}
    </>
  );
}

export default App;
