import { useState, useRef } from "react";
import { Modal, Button, Checkbox, Label, TextInput } from "flowbite-react";
import PropTypes from "prop-types";

// Low-level modal component
const LowLevelModals = ({
  openFirst,
  setOpenFirst,
  openSecond,
  setOpenSecond,
}) => {
  const littleLorem = (
    <p>
      These projects are perfect for beginners who want to learn the basics and
      build a strong foundation.
    </p>
  );

  return (
    <>
      {/* First modal */}
      <Modal show={openFirst} onClose={() => setOpenFirst(false)} center>
        <Modal.Body className="bg-blue-50 p-6 rounded-lg space-y-4">
          <p className="text-gray-700 text-lg font-medium">
            Do you want to Learn and Build your own project?
          </p>
          {littleLorem}
          <Button
            onClick={() => {
              setOpenFirst(false); // Close the first modal
              setOpenSecond(true); // Open the second modal
            }}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white"
          >
            Yes
          </Button>
          <Button
            onClick={() => setOpenFirst(false)}
            className="mt-4 ml-4 bg-gray-500 hover:bg-gray-400 text-white"
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>

      {/* Second modal */}
      <Modal show={openSecond} onClose={() => setOpenSecond(false)} center>
        <Modal.Body className="bg-green-50 p-6 rounded-lg space-y-4">
          <p className="text-gray-700 text-lg font-medium">
            Lets start building!
          </p>
          <Button
            onClick={() => (window.location.href = "https://www.ufuon.com")}
            className="mt-4 w-full bg-green-600 hover:bg-green-500 text-white"
          >
            Get Started
          </Button>
          <Button
            onClick={() => setOpenSecond(false)}
            className="mt-4 ml-4 bg-gray-500 hover:bg-gray-400 text-white"
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

// Prop validation for LowLevelModals
LowLevelModals.propTypes = {
  openFirst: PropTypes.bool.isRequired,
  setOpenFirst: PropTypes.func.isRequired,
  openSecond: PropTypes.bool.isRequired,
  setOpenSecond: PropTypes.func.isRequired,
};

// High-level modal component
const HighLevelModal = ({ openHigh, setOpenHigh }) => {
  const emailInputRef = useRef(null);

  return (
    <Modal
      show={openHigh}
      size="md"
      popup
      onClose={() => setOpenHigh(false)}
      initialFocus={emailInputRef}
    >
      <Modal.Header className="bg-cyan-600 text-white font-semibold text-lg" />
      <Modal.Body className="bg-cyan-50 p-6 rounded-lg space-y-4">
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900">
            Sign in to our platform
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              ref={emailInputRef}
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="#" className="text-sm text-cyan-700 hover:underline">
              Lost Password?
            </a>
          </div>
          <div className="w-full">
            <Button className="bg-cyan-600 hover:bg-cyan-500 text-white">
              Log in to your account
            </Button>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-500">
            Not registered?&nbsp;
            <a href="#" className="text-cyan-700 hover:underline">
              Create account
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

// Prop validation for HighLevelModal
HighLevelModal.propTypes = {
  openHigh: PropTypes.bool.isRequired,
  setOpenHigh: PropTypes.func.isRequired,
};

const Build = () => {
  const [openHigh, setOpenHigh] = useState(false);
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 p-8 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          Welcome to Build
        </h1>
        <p className="text-lg text-gray-600">
          Choose your project level and start building something amazing!
        </p>
      </div>
      {/* Content Section */}
      <div className="flex items-center gap-16">
        {/* Image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/1dab/4b11/c1ed7785121b6aa885d763c0940f7bbf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDoqHKib8RSY8BToKEJLMWDYz4d9oYNszUnFWAAUosiDbu09ACV24Yos6lVJnKalYa1Z7VagXqJLzZWuKm-roMP2BN4Ac1yDTcEiPhyJPP6vVZCyJysz6RvveUMnPi-u~hSH7QApFkxLyipe~TtyjeN7sjWvxHJzU8aXFIHd6MeNGkQQjn4oNgR7GEwF44ECoTyim1zmjtt-hUJBuWJDhcx1LFiQePrlVdtZZmflTPn6yUKxuFWOwpG7iDjzOd4JLolpVakLdLSOXlBL0-fEL4t9yvdbqC6oLA5dWOk5VjW2DSnvrj3jOmE4n5YCaWhyaFp7HJKFi08GljYdeCGTxQ__"
          alt="Build Project"
          className="w-96 h-auto object-cover rounded-lg"
        />

        {/* Buttons */}
        <div className="flex flex-col gap-6">
          <button
            onClick={() => setOpenFirst(true)}
            className="w-48 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:scale-105 transition-transform duration-300"
          >
            Low Level Project
          </button>
          <button
            onClick={() => setOpenHigh(true)}
            className="w-48 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-500 hover:scale-105 transition-transform duration-300"
          >
            High Level Project
          </button>
        </div>
      </div>

      {/* Low-Level Modals */}
      <LowLevelModals
        openFirst={openFirst}
        setOpenFirst={setOpenFirst}
        openSecond={openSecond}
        setOpenSecond={setOpenSecond}
      />

      {/* High-Level Modal */}
      <HighLevelModal openHigh={openHigh} setOpenHigh={setOpenHigh} />
    </div>
  );
};

export default Build;
