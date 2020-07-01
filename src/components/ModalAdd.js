import React from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import FormAdd from './FormAdd'

const ModalAdd = () => (
  <Modal trigger={<Button className="ui button" >Добавить новый фильм</Button>}>
    <Modal.Content >
        <FormAdd/>
      </Modal.Content>

  </Modal>
)


export default ModalAdd
