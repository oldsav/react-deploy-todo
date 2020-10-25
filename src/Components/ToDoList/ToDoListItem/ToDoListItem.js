import React from "react";
import "./ToDoListItem.css";

class ToDoListItem extends React.Component {
  render() {
    const { label, onDeleted, onTogleImportant, onTogleDone, done, important } = this.props;
    let classNames =  "todo-list-item-label";
    done ? (classNames += " done") : (classNames += "");
    important ? (classNames += " important") : (classNames += "");
    return (
      <span className="todo-list-item">
        <span
          className={ classNames }
          onClick={ onTogleDone}
        >
          {label}
        </span>
        <button
          className="btn btn-outline-success done"
          onClick={onTogleImportant}
        >
          <i className="fa fa-exclamation"></i>
        </button>
        <button 
          className="btn btn-outline-success"
          onClick = { onDeleted }>
          <i className="fa fa-trash-alt"></i>
        </button>
      </span>
    );
  }
}

///////////////function variant with hook useState//////////////////////

// const ToDoListItem = ({ label, onDeleted, onTogleImportant, onTogleDone, done, important }) => {
  
//   let classNames = "todo-list-item-label";
//   done ? (classNames += " done") : (classNames += "");
//   important ? (classNames += " important") : (classNames += "");
//   return (
//     <span className="todo-list-item">
//       <span
//         className={ classNames }
//         //use hook
//         onClick={ onTogleDone }
//       >
//         {label}
//       </span>
//       <button
//         className="btn btn-outline-success"
//         onClick={ onTogleImportant }
//       >
//         <i className="fa fa-exclamation"></i>
//       </button>
//       <button 
//          className="btn btn-outline-success"
//          onClick = { onDeleted }>
//         <i className="fa fa-trash-alt"></i>
//       </button>
//     </span>
//   );
// };

export default ToDoListItem;
