import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Register from "./Pages/Register";
import Weather from "./pages/Weather";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">

      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />

      <main className="container">

        <Routes>

          <Route
            path="/"
            element={
              <Home
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />

          <Route path="/todo" element={<Todo />} />

          <Route path="/register" element={<Register />} />

          <Route path="/weather" element={<Weather />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </main>

      <footer className="footer">
        React + Vite All-in-One Learning Project
      </footer>

    </div>
  );
}

export default App;