import React from "react";

function SearchBar({
  type = "",
  id = "",
  value = "",
  placeholder = "",
  ...props
}) {
  return (
    <div className="form-group">
      <input
        className={
            "form-control"
        }
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  );
}

export default SearchBar;
