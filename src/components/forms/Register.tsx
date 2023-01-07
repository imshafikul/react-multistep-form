import { Form, Stack } from "react-bootstrap";
import FormWrapper from "./Wrapper";

type RegisterData = {
  email: string;
  username: string;
  password: string;
};

type RegisterProps = {
  updateFileds: (fields: Partial<RegisterData>) => void;
} & RegisterData;

export default function RegisterForm({
  email,
  username,
  password,
  updateFileds,
}: RegisterProps) {
  return (
    <FormWrapper title="Account create">
      <Stack gap={3}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="john.doe@gmail.com"
            onChange={(e) => updateFileds({ email: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            placeholder="john"
            onChange={(e) => updateFileds({ username: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="******"
            onChange={(e) => updateFileds({ password: e.target.value })}
            required
          />
        </Form.Group>
      </Stack>
    </FormWrapper>
  );
}
