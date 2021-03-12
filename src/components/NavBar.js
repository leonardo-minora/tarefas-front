import React from 'react';

import {Link} from 'react-router-dom';

const Componente = (props) => {
    return (
        <div>
            <h2>Componente NavBar</h2>
            <Link to='/'>Home</Link>
            <Link to='/tasks'>Nova tarefa</Link>
            <hr />
        </div>
    );
}

export default Componente;