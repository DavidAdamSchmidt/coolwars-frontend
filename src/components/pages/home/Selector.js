import React from "react";

const Selector = ({ dojos, handleSelect, style }) => {
  return (
    <div style={style}>
      <select
        defaultValue={"default"}
        onChange={e => handleSelect(e.target.value)}
      >
        <option value={"default"} disabled hidden>
          Select
        </option>
        {dojos.map(dojo => (
          <option key={dojo.id} value={dojo.id}>
            {dojo.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
