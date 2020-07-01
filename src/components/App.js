import React from 'react';
import './App.scss';
import {API} from '../../api/api';
import {Table, Button} from 'semantic-ui-react';
import axios from 'axios';
import ModalAdd from './ModalAdd';


const RenderBodyItem = (props) => (
    <Table.Row>
        <Table.Cell>{props.Title}</Table.Cell>
        <Table.Cell>{props.Year}</Table.Cell>
        <Table.Cell>{props.Plot}</Table.Cell>
    </Table.Row> 
)


class App extends React.Component {
    constructor(){
        super();

        this.state = {
            data: []
        }
    }
    

    componentDidMount(){
        this.getAllMovies()
    }

    getAllMovies = () => { 
        axios.get(API)
            .then (resp => resp.data)
            .then(data => {
                this.setState({data})
            })
            .catch( error => {
                console.log(error)
            })  
    }


    render(){
        console.log('render', this.state.data)
        return (
         <>
            <ModalAdd/>
            <Table stackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Year</Table.HeaderCell>
                <Table.HeaderCell>Plot</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                {this.state.data.map(item =>
                    <RenderBodyItem key={item.id} {...item}/>
                    )}
            </Table.Body>
            </Table>
         </>

        )
    }
}

export default App;