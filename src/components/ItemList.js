import React, {useState} from 'react';

const Componente = (props) => {
    const item = props.item;
    const [completed, setIsCompleted] = useState(item.completed);

    return (
        <li key={item.id} onClick={() => setIsCompleted(!completed)}>
            <input type='checkbox' checked={completed} />
            <label>{item.title}</label>
        </li>
    );
}

export default Componente;