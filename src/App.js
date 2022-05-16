import "./App.css";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Error from "./components/error404";
import Headlines from "./components/NewsCategory/Headlines";
import React, { useState } from "react";
import Headlines2 from "./components/NewsCategory/Headlines-2 ";

function App() {
  const [news, setNews] = useState([]);

  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route
            index
            element={
              <Headlines2 news={news} Title="UptoDate" setNews={setNews} />
            }
          />
          <Route
            path="/headlines"
            element={
              <Headlines2 news={news} Title="UptoDate" setNews={setNews} />
            }
          />
          <Route
            path="/covid"
            element={
              <Headlines
                news={news}
                Title="Covid-19"
                setNews={setNews}
                keyword="covid"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <Headlines
                news={news}
                Title="Technology"
                setNews={setNews}
                keyword="technology "
              />
            }
          />
          <Route
            path="/politics"
            element={
              <Headlines
                news={news}
                Title="National"
                setNews={setNews}
                keyword="india"
              />
            }
          />
          <Route
            path="/international"
            element={
              <Headlines
                news={news}
                Title="International"
                setNews={setNews}
                keyword="international"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <Headlines
                news={news}
                Title="Sports"
                setNews={setNews}
                keyword="sports"
              />
            }
          />
          <Route
            path="/healthcare"
            element={
              <Headlines
                news={news}
                Title="Healthcare"
                setNews={setNews}
                keyword="health"
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



