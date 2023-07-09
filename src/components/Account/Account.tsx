import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";
import SignIn from "../../pages/sign-in";

const Account = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  function onDropdownItemClick(value: string) {
    setShowDropdown(!showDropdown);

    if (value === "Log in") {
      console.log("Login In clicked");
    }
  }

  return (
    <div className="account">
      <span
        className="dropdown__icon icon-container"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </span>
      <Dropdown
        dropDownList={["Log in", "Help"]}
        expanded={showDropdown}
        clickItem={onDropdownItemClick}
      />
    </div>
  );
};

export default Account;
