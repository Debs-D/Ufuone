import { Component } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

class ModalExample extends Component {
  state = { open: false };

  onOpenModal = () => this.setState({ open: true });
  onCloseModal = () => this.setState({ open: false });

  render() {
    return (
      <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        <button
          onClick={this.onOpenModal}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Open Modal
        </button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <h2>Simple Centered Modal</h2>
          <p>Do you want to learn and build your own project?</p>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
