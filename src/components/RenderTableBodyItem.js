import React from 'react';
import {deleteMovieServer} from '../../api/api';
import {Table, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const RenderTableBodyItem = (props) => {

    function deleteMovie(e){
    const id = e.currentTarget.id;
    deleteMovieServer(id).then(() => props.needUpdate())
    .catch(error => {
        console.error('Ошибка удаления', error)
      });  
    } 

   return (
        <Table.Row id={props.id}>
            <Table.Cell>{props.Title}</Table.Cell>
            <Table.Cell textAlign={"center"}>{props.Year}</Table.Cell>
            <Table.Cell>{props.Plot}</Table.Cell>
            <Table.Cell textAlign={"center"} id={props.id} ><a id={props.id} onClick={deleteMovie}><Icon disabled name='delete' /> </a></Table.Cell>
        </Table.Row> 
    )

}

RenderTableBodyItem.propTypes = {
    Title: PropTypes.string,
    Year: PropTypes.string,
    id: PropTypes.number.isRequired,
    Plot: PropTypes.string,
    needUpdate: PropTypes.func.isRequired
}

export default RenderTableBodyItem;