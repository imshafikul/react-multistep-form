import React from "react";
import { FormData } from "../types";
import { Modal, Form } from "react-bootstrap";

type RegisteredInfoProps = {
  show: boolean;
  handleClose: () => void;
} & FormData;

export default function RegisteredInfo({
  show,
  handleClose,
  ...rest
}: RegisteredInfoProps) {
  console.log(rest);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Your Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <code>{JSON.stringify(rest)}</code>
      </Modal.Body>
    </Modal>
  );
}
