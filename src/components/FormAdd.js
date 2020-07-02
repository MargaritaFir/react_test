import React, {useRef, useState} from 'react'
import { Button,  Form } from 'semantic-ui-react';
import {addMovieServer} from '../../api/api';
import PropTypes from 'prop-types';


const FormAdd = (props) =>{ 
  
  const titleRef = useRef();
  const yearRef = useRef();
  const discriptionsRef = useRef();

  //Не успела доделать валидацию формы и выход из формы без сохранения

  function handleSubmit(e){
      e.preventDefault();
      const Title = titleRef.current.value;
      const Year = yearRef.current.value;
      const Plot = discriptionsRef.current.value;
      const item = {Title, Year, Plot};
      addNewMovie(item)
  }


  function addNewMovie(item) {
    addMovieServer(item).then(() => props.close())
      .catch(error => {
          console.error('Ошибка добавления', error)
    }); 
  }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Title' ref={titleRef} />
        </Form.Field>
        <Form.Field>
          <label>Year</label>
          <input placeholder='Year'  ref={yearRef} />
        </Form.Field>
        <Form.Field>
          <label>Discriptions</label>
          <input placeholder='Discriptions'  ref={discriptionsRef} />
        </Form.Field>
        <Button type='submit'>Save movie</Button>
      </Form>
  )
}

FormAdd.propTypes ={
  close: PropTypes.func.isRequired
}
export default FormAdd;