import React from 'react';
import Modal from 'react-modal';

const ContactModal = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            color: 'black',
          },
        }}
        contentLabel="Example Modal"
      >
        <h2 className="text-gradient w-fit text-3xl leading-tight mb-6">
          Thanks for reaching out!
        </h2>
        <button className="btn2" onClick={closeModal}>
          Close
        </button>
        <div>I will reach out as soon as possible. Thanks!</div>
      </Modal>
    </div>
  );
};

export default ContactModal;
