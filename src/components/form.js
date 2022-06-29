import React from 'react';

function Form(props) {
    return (
        <form onSubmit={props.weatherMethod}>
            <input type='text' name='city' placeholder='Город' />
            <button>Get weather</button>
        </form>
    );
}

export default Form;