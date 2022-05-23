import { Modal } from "../Modal";
import Form from "../Form";
import { configs } from "../Form/config";
export default (props: {
  modalHash: string;
  setModalHash: (hash: string) => void;
}) => {
  return (
    <Modal
      isOpen={Boolean(props.modalHash)}
      onClose={() => {
        props.setModalHash("");
        history.back();
      }}
    >
      {props.modalHash === "search" && <p>Search</p>}
      {props.modalHash === "add-patient" && (
        <Form config={configs} onSumbit={(data) => console.log(data)} />
      )}
    </Modal>
  );
};
