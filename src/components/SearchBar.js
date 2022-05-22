import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { constructResults } from "../utilities/Helper";
import axios from "axios";

function SearchBar({ placeholder }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https:gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json"
      )
      .then((response) => {
        let results = constructResults(response.data);
        setData(JSON.parse(JSON.stringify(results)));
        setSearchResults(results);
        setIsLoaded(true);
      });
  }, []);

  const handleFilter = (event, selectedData) => {
    let searchWord = event.target.value;
    setSearchTerm(searchWord);
    if (!searchWord || !searchWord.trim()) {
      setSearchResults(JSON.parse(JSON.stringify(data)));
    } else {
      searchWord = searchWord.toLowerCase();
      const results = data.filter((elem) => {
        return (
          elem.searchKey.includes(searchWord) ||
          elem.displayName.toLowerCase().includes(searchWord)
        );
      });
      setSelected(selectedData);
      setSearchResults(results);
    }
    setShowOptions(!Boolean(selectedData));
  };

  const handleKeyDown = (e) => {
    let results = JSON.parse(JSON.stringify(searchResults));
    if (showOptions && results && results.length > 0)
      if (e.keyCode === 38) {
        let a = results.pop();
        results.unshift(a);
        setSearchResults(results);
      } else if (e.keyCode === 40) {
        let a = results.shift();
        results.push(a);
        setSearchResults(results);
      } else if (e.keyCode === 13) {
        handleFilter(
          { target: { value: results[0].displayName } },
          results[0].displayName
        );
      }
  };
  const handleSelect = (e) => {
    let selectedData = e.currentTarget.name;
    handleFilter({ target: { value: selectedData } }, selectedData);
  };

  const clearInput = () => {
    setSearchResults(JSON.parse(JSON.stringify(data)));
    setSearchTerm("");
    setSelected(null);
    setShowOptions(false);
  };

  return isLoaded ? (
    <div
      className="search"
      onFocus={(e) => {
        setShowOptions(true);
      }}
      onBlur={(e) => {
        setTimeout(() => setShowOptions(false), 300);
      }}
    >
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleFilter}
          onKeyDown={handleKeyDown}
          onClick={(e) => {
            setShowOptions(true);
          }}
          onFocus={(e) => {
            setShowOptions(true);
          }}
        />
        <div className="searchIcon">
          {searchTerm.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {showOptions && searchResults.length !== 0 && (
        <div className="dataResult">
          {searchResults.map((value, index) => {
            return (
              <button
                key={value.displayName}
                className="dataItem"
                name={value.displayName}
                onClick={handleSelect}
              >
                <div className="box">
                  <div className="initialsStyle">{value.initials}</div>
                </div>
                <div className="dataContent">
                  <div>
                    <b>{value.displayName}</b>
                  </div>
                  <div>{value.email}</div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  ) : (
    <h1>loading...</h1>
  );
}

export default SearchBar;
