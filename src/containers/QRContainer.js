import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const QRContainer = (props) => {
  const {
    className,
    toggle,
    modal
  } = props;

    return (
        <>
        <section className="modal-qrcode">
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>
                    <img src="./assets/images/issuer-logos/logo-akuhk.png" alt="" />                
                </ModalHeader>
                <ModalBody>
                    <p>This pop up will close automatically when Patient connects from their VAXN mobile wallet.</p>
                    <img src="./assets/images/example-qr.png" alt="" />
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </section>
        </>
    )
}

export default QRContainer