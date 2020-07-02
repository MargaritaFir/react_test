import React from 'react';
import './App.scss';
import {getMoviesServer} from '../../api/api';
import {Table} from 'semantic-ui-react';

import ModalAdd from './ModalAdd';
import RenderTableBodyItem from './RenderTableBodyItem';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            data: [],
            isUpdate: false
        }
    }
    
    componentDidMount(){
        this.getAllMovies();
    }

    componentDidUpdate(prevProps, prevState){
        if(!prevState.isUpdate && prevState.isUpdate !== this.state.isUpdate){
            this.getAllMovies();
        }
    }

    needUpdate =() => {
        this.setState({isUpdate:true})
    }



    getAllMovies = () => {    
        getMoviesServer().then(resp => resp.data)
            .then(data => {
                const dataState = data.reverse()
                this.setState({
                    data:dataState,
                    isUpdate: false
                })
            })
            .catch( error => {
                console.error('Ошибка получения', error)
        }); 
    }

    render(){
        
        return (
         <>
            <ModalAdd needUpdate={() => this.needUpdate()}/>
            <Table stackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Year</Table.HeaderCell>
                <Table.HeaderCell>Plot</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                {this.state.data.map(item =>
                    <RenderTableBodyItem key={item.id} {...item}  needUpdate={() => this.needUpdate()}/>
                    )}
            </Table.Body>
            </Table>
         </>

        )
    }
}

export default App;