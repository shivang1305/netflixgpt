import React from "react";
import { SUPPORTED_LANGUAGES } from "../../utils/constants/constants";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/slices/configSlice";

const LanguageSelection = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <select
      onChange={handleLanguageChange}
      className="p-4 m-4 bg-gray-800 text-white rounded-lg"
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelection;
