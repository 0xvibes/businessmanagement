import React, {useState} from 'react'

function todoform(props) {
const [input, setInput] = useState('');

const handleChange = e => {
    setInput(e.target.value);
}

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('');



    };

  return (
    
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="what u tryna do bruh?" 
            value={input} 
            name="text" 
            className='todo-input'
            onChange={handleChange}
            >
            
            </input>
            
            <button className='todo-button'>Add Now</button>

            
        </form>
   
  )
}

export default todoform