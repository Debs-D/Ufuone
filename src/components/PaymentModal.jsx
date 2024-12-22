import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./PaymentModal.css"; // Create a separate CSS file for styling

const PaymentModal = ({ isOpen, onClose }) => {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardDetailsSubmit = () => {
    // Validate the card details (simple validation for demonstration)
    if (!cardNumber.trim()) {
      alert("Please enter a valid card number");
      return;
    }
    console.log("Card details submitted:", {
      cardHolder,
      cardNumber,
      expMonth,
      expYear,
      cvc,
    });
    onClose(); // Close modal after submitting
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="payment-card-details">
          <div className="card-info">
            <img
              className="group"
              src="https://c.animaapp.com/Cc1mUs7z/img/group-18.png"
              alt="Card Background"
            />
            <div className="group-2">
              <div className="group-copy-2">
                <div className="group-7">
                  <div className="oval"></div>
                  <div className="oval-2"></div>
                </div>
                <div>
                  <div className="text-wrapper">{cardNumber}</div>
                  <div className="group-6">
                    <div className="john-doe">{cardHolder}</div>
                    <div className="element-2">
                      {expMonth}/{expYear}
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-group">
                  <div className="rectangle-14"></div>
                  <div className="rectangle-15">
                    <div className="element">000</div>
                  </div>
                  <div className="carcass">
                    <img src="./carcass (1).svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-inputs">
          <label>Cardholder Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
          <label>Card Number</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="flex">
            <div>
              <label>Exp. Date (MM/YY)</label>
              <div className="flex-wrap">
                <input
                  type="text"
                  placeholder="MM"
                  value={expMonth}
                  onChange={(e) => setExpMonth(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="YY"
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label>CVC</label>
              <input
                type="text"
                placeholder="e.g. 123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>
          <button className="btn" onClick={handleCardDetailsSubmit}>
            Confirm
          </button>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

// Prop validation
PaymentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PaymentModal;
