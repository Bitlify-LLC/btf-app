import { Button, useDisclosure } from "@chakra-ui/react";
import "./Dropdown.css";

interface Props {
  dropDownList: string[];
  expanded?: boolean;
  clickItem: (item: string) => void;
}
const Dropdown = ({
  dropDownList = [],
  expanded = false,
  clickItem,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const style = expanded ? "show dropdown__hide" : "dropdown__hide";

  return (
    <div className="dropdown">
      <div className="block--dark dropdown__content">
        <div className={style}>
          
          <Button onClick={onOpen}>Open Modal</Button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
