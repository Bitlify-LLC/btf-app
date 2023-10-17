import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submited:", person);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          onChange={(event) =>
            setPerson({ ...person, name: event?.target?.value })
          }
          value={person.name}
          placeholder="Name"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          onChange={(event) =>
            setPerson({ ...person, email: event?.target?.value })
          }
          value={person.email}
          placeholder="Email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Phone</FormLabel>
        <Input
          onChange={(event) =>
            setPerson({ ...person, phone: event?.target?.value })
          }
          value={person.phone}
          placeholder="Phone"
        />
      </FormControl>
      <HStack spacing="1rem">
        <FormControl mt={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(event) =>
              setPerson({ ...person, password: event?.target?.value })
            }
            value={person.password}
            placeholder="Password"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            onChange={(event) =>
              setPerson({ ...person, cPassword: event?.target?.value })
            }
            value={person.cPassword}
            placeholder="Confirm Password"
          />
        </FormControl>
      </HStack>
      <Button colorScheme="blue" mr={3} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
