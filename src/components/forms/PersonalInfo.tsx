import { Form, Stack } from "react-bootstrap";
import FormWrapper from "./Wrapper";

type PersonalInfoData = {
  firstName: string;
  lastName: string;
  age: number;
};

type PersonalInfoProps = {
  updateFileds: (fields: Partial<PersonalInfoData>) => void;
} & PersonalInfoData;

export default function PersonalInfo({
  firstName,
  lastName,
  age,
  updateFileds,
}: PersonalInfoProps) {
  return (
    <FormWrapper title="Personal info">
      <Stack gap={3}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={firstName}
            placeholder="John"
            onChange={(e) => updateFileds({ firstName: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastName}
            placeholder="Doe"
            onChange={(e) => updateFileds({ lastName: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={age}
            placeholder="30"
            min={1}
            onChange={(e) => updateFileds({ age: parseInt(e.target.value) })}
          />
        </Form.Group>
      </Stack>
    </FormWrapper>
  );
}
