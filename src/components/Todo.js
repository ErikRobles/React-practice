import React from 'react';
import TodoItem from "./TodoItem";

function Todo() {
    const firstName = "Erik";
    const lastName = "Robles";
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    const styles = {
        fontSize: 30
    }

    if(hours < 12) {
        timeOfDay = "morning";
        styles.color = "#04756f";
    } else if (hours > 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles.color = "#8914A3";
    } else {
        timeOfDay = "evening";
        styles.color = "#D90000";
    }

    const styles1 = {
        color: "#df3458", 
        backgroundColor: "#3a6890", 
        padding: "20px 0", 
        marginTop: "-20px"
    } 

    return (
       <div>
        <h1 style={styles1}>Todos</h1>
        <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        </div>
        <h3 style={styles}>Good {`${timeOfDay}`} {`${firstName} ${lastName}`}!</h3>
       </div>
    )
}

export default Todo