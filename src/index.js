import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    const button={text:'hello'};
    const style={backgroundColor:'red',color:'white'};
    return(
        <div>
            <label htmlFor="name" className="label">Enter your email</label>
            <input id="name" type="text"/>
            <button style={style}>{button.text}</button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)