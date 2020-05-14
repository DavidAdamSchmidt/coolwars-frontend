import React, { useEffect, useState } from "react";
import Select from "react-select";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 340px;
  padding: 20px;
  color: #1d1e22;
`;

const createOptions = dojos =>
  dojos.map(d => {
    return { value: d.id, label: d.title };
  });

const Selector = ({ dojos, handleSelect }) => {
  const [options, setOptions] = useState(createOptions(dojos));

  useEffect(() => setOptions(createOptions(dojos)), [dojos]);

  return (
    <Wrapper>
      <Select
        options={options}
        onChange={o => handleSelect(o.value)}
        placeholder="Select a dojo..."
        noOptionsMessage={() => "No dojo available"}
        maxMenuHeight={110}
        isSearchable
      />
    </Wrapper>
  );
};

export default Selector;
