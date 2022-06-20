import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    //documentation:https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleChangeKeyword} />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
