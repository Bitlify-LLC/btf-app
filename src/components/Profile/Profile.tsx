import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import SignIn from "../../pages/sign-in";

const Profile = () => {
  function onMenuItemClick(value: string) {
    console.log("CLicked :", value);
  }
  return (
    <Menu>
      <MenuButton as={Avatar} colorScheme="white"></MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem onClick={() => onMenuItemClick("log-in")}>
            <SignIn />
          </MenuItem>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default Profile;
