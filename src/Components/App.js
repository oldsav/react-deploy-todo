import React, { Component, useState } from "react";
import ToDoList from "./ToDoList/ToDoList";
import Search from "./Search/Search";
import Head from "./Head/Head";
import AddItem from "./AddItem/AddItem";
import "./App.css";

class Todo extends Component {
  maxId = 100;
  state = {
    toDoData: [
      { label: "Drink Coffe", done:false, important: false, id: 1 },
      { label: "Work", done:false, important: false, id: 2 },
      { label: "Sleep", done:false, important: false, id: 3 },
    ],
    term:"",
    filter: "all"
  };
  deleteItem = (id) => {
    this.setState(({ toDoData }) => {
      const idx = toDoData.findIndex((el) => el.id === id);//получаем елемент массива
      const before = toDoData.slice(0, idx);
      const after = toDoData.slice(idx+1);
      const newArr = [...before, ...after];
      return { toDoData:newArr };
    });
  };
  addItem = (text)=>{
    //generate id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };
    //add in toDoData
    this.setState(({ toDoData })=>{
      const newArr = Array.from(toDoData);
      return{
        toDoData: [...newArr, newItem]
      };
    });
  };
  onTogleImportant =(id)=>{
    this.setState(({ toDoData })=>{
      const idx = toDoData.findIndex((el) => el.id === id);//получаем елемент массива
      const oldItem = toDoData[idx];
      const before = toDoData.slice(0, idx);
      const after = toDoData.slice(idx+1);
      const newItem = {...oldItem, important: !oldItem.important};
      const newArr = [...before, newItem, ...after];
      return { toDoData:newArr };

    });
  };
  onTogleDone = (id)=>{
    this.setState(({ toDoData })=>{
      const idx = toDoData.findIndex((el) => el.id === id);//получаем елемент массива
      const oldItem = toDoData[idx];
      const before = toDoData.slice(0, idx);
      const after = toDoData.slice(idx+1);
      const newItem = {...oldItem, done: !oldItem.done};
      const newArr = [...before, newItem, ...after];
      return { toDoData:newArr };

    });
  };
  
  search = (items, term)=>{
    if (term.length===0){
      return items;
    }
    return items.filter((item)=>{
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase())>-1;
    });
  };
  onSerchchange = (term)=>{
    this.setState({ term });
  };
  filter = (items, filter)=>{
    switch(filter){
      case "all":
        return items;
      case "active":
        return items.filter((item)=>!item.done);
      case "done":
        return items.filter((item)=>item.done);
      default:
        return items;
    }
    
  };
  onFilterChange = (filter)=>{
    this.setState({ filter });
  };
  render() {
    const visibleItems = this.filter(
      this.search(this.state.toDoData, this.state.term)
      , this.state.filter);
    const doneCount = this.state.toDoData
                      .filter((el)=>el.done).length;
    const todoDone = this.state.toDoData.length-doneCount;
    return (
      <div className="todo-container">
        <Head 
          done = { doneCount }
          todo = { todoDone } />
        <Search 
          onSerchchange = { this.onSerchchange }
          filter = { this.state.filter }
          onFilterChange = { this.onFilterChange }
          />
        <ToDoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onTogleImportant = { this.onTogleImportant}
          onTogleDone = { this.onTogleDone}/>
        <AddItem addItem = { this.addItem }/>
      </div>
    );
  }
}

//////functions/////////

// const Todo = (props) => {
//   const [toDoData, settoDoData] = useState([
//     { label: "Drink Coffe", done: false, important: false, id: 1 },
//     { label: "Work", done: false, important: false, id: 2 },
//     { label: "Sleep", done: false, important: false, id: 3 },
//   ]);
//   const doneCount = toDoData.filter((el)=>el.done).length;
//   const todoDone = toDoData.length-doneCount;
//   return (
//     <div className="todo-container">
//       <Head 
//       done = { doneCount }
//       todo = { todoDone }
//       />
//       <Search />
//       <ToDoList
//         todos={toDoData}
//         onDeleted={(id) => {
//           const newArr = Array.from(toDoData);
//           const indx = newArr.findIndex((i) => i.id === id);
//           newArr.splice(indx, 1);
//           settoDoData(newArr);
//         }}
//         onTogleImportant={(id) => {
//           const idx = toDoData.findIndex((el) => el.id === id); //получаем елемент массива
//           const oldItem = toDoData[idx];
//           const before = toDoData.slice(0, idx);
//           const after = toDoData.slice(idx + 1);
//           const newItem = { ...oldItem, important: !oldItem.important };
//           const newArr = [...before, newItem, ...after];
//           settoDoData(newArr);
//         }}
//         onTogleDone={(id) => {
//           const idx = toDoData.findIndex((el) => el.id === id); //получаем елемент массива
//           const oldItem = toDoData[idx];
//           const before = toDoData.slice(0, idx);
//           const after = toDoData.slice(idx + 1);
//           const newItem = { ...oldItem, done: !oldItem.done };
//           const newArr = [...before, newItem, ...after];
//           settoDoData(newArr);
//         }}
//       />
//       <AddItem
//         addItem={(text) => {
//           let maxId = 100;
//           const newArr = Array.from(toDoData);
//           const newItem = {
//             label: text,
//             important: false,
//             id: maxId++,
//           };
//           settoDoData([...newArr, newItem]);
//           console.log(12);
//         }}
//       />
//     </div>
//   );
// };

export default Todo;
