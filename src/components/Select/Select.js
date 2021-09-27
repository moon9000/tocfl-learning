import * as React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

export function Select(props) {
  const { name, options, handleChange } = props;
  const [value, setValue] = React.useState(options[0].value);

  return (
    <div className="flex flex-row space-x-4 text-center justify-center items-center">
      <select name={name} onChange={(e) => handleChange(e)}>
        <option>Choose a {name} : </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option["value"]}>
              {option["value"]}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.array,
};
