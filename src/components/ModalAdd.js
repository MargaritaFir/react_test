import React, {useState} from 'react';
import { Button, Modal} from 'semantic-ui-react';
import FormAdd from './FormAdd';
import PropTypes from 'prop-types';

const ModalAdd = (props) => {

  const [open, isOpen] = React.useState(false);

  function close(){   
    isOpen(false);
    props.needUpdate();
  } 

  return (
    <Modal trigger={<Button className="ui button"  onClick={() =>isOpen(true)}>Добавить новый фильм</Button>}  open={open}>
    <Modal.Content >
        <FormAdd close={() => close()}/>
      </Modal.Content>
  </Modal>
  )
}

ModalAdd.propTypes ={
  needUpdate: PropTypes.func.isRequired
}


export default ModalAdd
