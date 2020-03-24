import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ChartData from './ChartData'

const ModalGraph = (props) => {
  const {
    countryName,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <div style={{textUnderlinePosition: "under", cursor: "pointer"}} onClick={toggle}>{countryName}</div>
      <Modal isOpen={modal} toggle={toggle} className={className} size='xl'>
        <ModalHeader toggle={toggle}>Graph Representation</ModalHeader>
        <ModalBody>
          <ChartData />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalGraph;
