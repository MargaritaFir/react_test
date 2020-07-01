import React from 'react'
import { Button,  Form } from 'semantic-ui-react';

const FormAdd = () => (
  <Form>
    <Form.Field>
      <label>Title</label>
      <input placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <label>Year</label>
      <input placeholder='Year' />
    </Form.Field>
    <Form.Field>
      <label>Discriptions</label>
      <input placeholder='Discriptions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormAdd;