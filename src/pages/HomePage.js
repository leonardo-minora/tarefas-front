import React, {useState, useEffect} from 'react';

import tasks from '../data/tasks';

import {FlatList} from '../components';

const Page = (props) => {
    
    return (
        <div>
            <h1>Minha lista de tarefas</h1>
            <FlatList data={tasks} />
        </div>
    );
}

export default Page;