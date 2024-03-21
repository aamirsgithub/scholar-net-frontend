import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { SearchField } from "./Style";

const SearchBar = () => {
  return (
    <SearchField
      id="outlined-search"
      placeholder="Question Title/Number"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon style={{ color: "#C6CBD9", fontSize: "20px" }} />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default SearchBar;
