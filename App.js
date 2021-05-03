import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  Kannada: [
    { name: "yuvarathna", rating: "4/5" },
    { name: "roberrt", rating: "3/5" }
  ],
  Hindi: [
    { name: "saina", rating: "3.5/5" },
    { name: "roohi", rating: "2.5/5" }
  ],
  Telugu: [
    { name: "vakeelsaab", rating: "3.25/5" },
    { name: "rangde", rating: "3.5/5" }
  ],
  Tamil: [
    { name: "master", rating: "3.5/5" },
    { name: "karnan", rating: "4/5" }
  ]
};
export default function App() {
  const [selectedLang, setLang] = useState("Hindi");
  function langClickHandler(lang) {
    setLang(lang);
  }
  return (
    <div className="App">
      <h1>🎦Good Movies</h1>
      <p style={{ fontSize: "smaller" }}>Select a lang to get started</p>
      <div>
        {Object.keys(movieDB).map((lang) => (
          <button
            onClick={() => langClickHandler(lang)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 1rem",
              backgroundColor: "#E5E7EB",
              borderRadius: "0.5rem",
              border: "solid 1px black",
              margin: "1rem  0.3rem"
            }}
          >
            {lang}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedLang].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "75%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {""}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
