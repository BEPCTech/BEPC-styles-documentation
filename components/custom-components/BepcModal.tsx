// components/Modal.js

import { useState } from 'react';

function Modal() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

    return (
      <>
      <button className='primary-button-bepc' onClick={openModal}>Abrir Modal</button>

      <div className={`modal ${modalVisible ? 'visible' : ''}`}>
        <div className="modal-contenido">
          <span className="cerrar" onClick={closeModal}>&times;</span>
          <h1 className='bepc-h1'>Modal header</h1>
          <h3 className='bepc-h3'>Modal subtitle</h3>
          <hr className='my-3'></hr>
          <p className='figtree-p'>Modal text</p>
        </div>
      </div>
      </>
    );
}
  


export default Modal;
