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
      if(isValid(Title)&& isValid(Year) && isValid(Plot)){
        const item = {Title, Year, Plot};
        addNewMovie(item);
      } else {
        alert('Заполните все поля!')
      }

  }


  function addNewMovie(item) {
    addMovieServer(item).then(() => props.close())
      .catch(error => {
          console.error('Ошибка добавления', error)
    }); 
  }

  function isValid(value){
    return (value !== '' || undefined)?true:false;
  }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
          <label>Title</label>
          <input placeholder='Title' ref={titleRef} />
        </Form.Field>
        <Form.Field required>
          <label>Year</label>
          <input placeholder='Year'  ref={yearRef} />
        </Form.Field>
        <Form.Field required>
          <label>Discriptions</label>
          <input placeholder='Discriptions'  ref={discriptionsRef} />
        </Form.Field>
        <div>
            <Button type='submit'>Save movie</Button>
            <a onClick={props.close}><Button >Close</Button></a>
        </div>
      </Form>
  )
}

FormAdd.propTypes ={
  close: PropTypes.func.isRequired
}
export default FormAdd;