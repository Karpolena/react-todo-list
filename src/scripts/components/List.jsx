import React from 'react';
const List = props => (
    <div>
        <ol className="list">
            { 
                props.list.map((item, index) => (
                <div key={index} className="list__item">
                    <li>{item.title}</li>
                    <button onClick={props.removeHandler.bind(this, item.id)} className="del">del</button>
                </div>
            ))
            }
        </ol>
    </div>
);



export default List;
