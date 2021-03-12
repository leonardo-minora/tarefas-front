import React, {useState, useEffect} from 'react';

import {Container, FlatList} from '../components';

const Page = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos').
            then(resultado => resultado.json()).
            then(json => {
                setTasks(json);
                setIsLoaded(true);
            })
    }, []);

    return (
        <Container>
            <h1>Minha lista de tarefas</h1>
            {isLoaded ?
                <FlatList data={tasks} /> :
                <h2>Carregando...</h2> }
        </Container>
    );
}

export default Page;