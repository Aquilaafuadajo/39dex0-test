import React from "react";
import { BaseButton } from "../components/IconButton";
import { Row } from "../components/Flex";
import { Modal } from "src/components/Modal";
import Form from "src/components/Form";
import { configs } from "src/components/Form/config";

export default (props: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const openAddPatientModal = () => {
    //Todo:  opens add patient modal
    setIsModalOpen(true);
  };
  return (
    <Row justify="space-between" align="center">
      <h1>Home</h1>{" "}
      <Row width="fit-content">
        <BaseButton
          onClick={openAddPatientModal}
          color="white"
          background="secondary"
        >
          Add Patient
        </BaseButton>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Form config={configs} onSumbit={(data) => console.log(data)} />
        </Modal>
      </Row>
    </Row>
  );
};
