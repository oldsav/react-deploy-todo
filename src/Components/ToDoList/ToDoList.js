import React from "react";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import "./ToDoList.css";

const ToDoList = ({ todos, onDeleted, onTogleImportant, onTogleDone }) => {
    const Elements = todos.map((item) =>{
      const { label, important, id, done } = item;
        return(
            <li key = { id } className = "list-group-item">
                <ToDoListItem 
                  label = { label } 
                  important = { important }
                  done = { done }
                  onDeleted = { ()=>onDeleted(id) }
                  onTogleImportant = { ()=>onTogleImportant(id) }
                  onTogleDone = { ()=>onTogleDone(id)}/>
                {/* <ToDoListItem label = { ...item }/> */}
            </li>
        )
    });
  return (
    <div className="list-group todo-list">
      <ul>
          { Elements }
      </ul>
    </div>
  );
};

export default ToDoList;
