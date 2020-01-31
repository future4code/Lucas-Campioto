import React from 'react';




function Task(props) {

    return (
        <div>
            <h3>{props.day}</h3>
            {props.tasks.map(task => (
                <div>
                    <p>{task.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Task;