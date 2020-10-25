import React from "react";
import "./AddItem.css";
// class AddItem extends React.Component {
//   render() {
//     return (
//       <form 
//         className="item-form"
//         onSubmit = { (e)=>{
//           e.preventDefault();
//           this.props.addItem(document.querySelector(".item-input").value);
//           } }>
//         <input
//           className="form-control item-input"
//           type="text"
//           placeholder="Default input"
//           >

//         </input>
//         <button 
//             className="btn btn-success">
//           Add Item
//         </button>
//       </form>
//     );
//   }
// }

////function///////

const AddItem = ({ addItem }) => {
    return (
        <form 
           className = 'item-form'
             onSubmit = { (e)=>{
             e.preventDefault();
             addItem(document.querySelector(".item-input").value)
             } }>
            <input 
              className="form-control item-input" 
              type="text" 
              placeholder="Default input"
              >

              </input>
            <button
            className = 'btn btn-success'
            >
                Add Item
            </button>
        </form>
    );
}

export default AddItem;
