import React from 'react';
import './Search.css';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
class Search extends React.Component{
    state={
        term:''
    };
    render(){
        return(
            <div className = 'search-todo'>
            <input 
                placeholder = 'Search here'
                value = { this.state.term }
                onChange = { (e)=>{
                    const term = e.target.value;
                    this.setState({ term });
                    this.props.onSerchchange(term);
                } } >

            </input>
            <ItemStatusFilter 
                filter = {this.props.filter}
                onFilterChange = { this.props.onFilterChange }
                />
        </div>
        );
    }
}


// const Search = ({ data }) => {
//     const placeholderText = 'Search here';
//     return (
//         <div className = 'search-todo'>
//             <input 
//                 placeholder = { placeholderText }
//                 onChange = { ()=>{
//                     //data.forEach((i)=>console.log(i.label))
//                 } } >

//             </input>
//             <ItemStatusFilter/>
//         </div>
//     );
// }

export default Search;