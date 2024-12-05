import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PropTypes from "prop-types";

const ModalExample = ({ open, onCloseModal, message }) => {
  return (
    <Modal open={open} onClose={onCloseModal} center>
      <h2></h2>
      <p>{message}</p>
    </Modal>
  );
};

ModalExample.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ModalExample;
