import { Form, Stack } from "react-bootstrap";
import FormWrapper from "./Wrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressProps = {
  updateFileds: (fields: Partial<AddressData>) => void;
} & AddressData;

export default function Address({
  street,
  city,
  state,
  zip,
  updateFileds,
}: AddressProps) {
  return (
    <FormWrapper title="Address info">
      <Stack gap={3}>
        <Form.Group>
          <Form.Label>Street</Form.Label>
          <Form.Control
            value={street}
            placeholder="Enter street"
            onChange={(e) => updateFileds({ street: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            placeholder="Enter city"
            onChange={(e) => updateFileds({ city: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control
            value={state}
            placeholder="Enter state"
            onChange={(e) => updateFileds({ state: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Zip</Form.Label>
          <Form.Control
            value={zip}
            placeholder="Enter zip"
            onChange={(e) => updateFileds({ zip: e.target.value })}
            required
          />
        </Form.Group>
      </Stack>
    </FormWrapper>
  );
}
