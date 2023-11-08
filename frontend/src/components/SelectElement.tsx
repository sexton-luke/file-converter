import React, { ChangeEvent, useState } from "react";

type SelectElementProps = {
  options: string[];
  onSelectionChange: (selectedValue: string) => void;
};

export default function SelectElement({
  options,
  onSelectionChange,
}: SelectElementProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelectionChange(selectedValue);
  };

  return (
    <select
      className="px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm bg-slate-200 rounded-md"
      value={selectedOption}
      onChange={handleOptionChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
