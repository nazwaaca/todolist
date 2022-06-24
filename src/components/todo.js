import React from "react";
import './todo.css'

class Todo extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state({
            
    //     });
    // }

    render(){
        return(
        <div className='todo'>
            <div className='todo-input'>
                <input type='text' className='input-type' placeholder= "Masukkan Text" />
                <button type='submit' className="Add-input">Add</button>
            </div>
          </div>
        );
    }
}
export default Todo;