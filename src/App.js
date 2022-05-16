import "./App.css";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupWithValidation from "./components/Signup/SignupWithValidation";
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
          <Route path="/signUp" element={<SignupWithValidation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// extras

// useEffect(() => {
//   let API_KEY = "6a5153da7a214fc7a3119a91e5e6595e";
//   axios
//     .get(
//       `https://newsapi.org/v2/top-headlines?q=covid&apiKey=${API_KEY}&country=in`
//     )
//     .then((res) => setNews(res.data.articles))
//     .catch((err) => console.log(err.message));
// }, []);

//referesh news api button

// const refreshNews = () => {
//   axios
//     .get(
//       "https://newsapi.org/v2/top-headlines?apiKey=82cf17fc942147f0b6e41ba0bb2d3cdf&country=in"
//     )
//     .then((res) => setNews(res.data.articles))
//     .catch((err) => console.log(err.message));
// };
