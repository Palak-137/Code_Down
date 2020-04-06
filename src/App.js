import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  constructor(props){
   super(props);
   this.state={
     newItem:"",
     list : []
   }
  }
  addItem(todoValue){
    if(todoValue!==""){
          const newItem = {
            id:Date.now(),
            value :todoValue,
            isDone:false
          };
          const list=[...this.state.list];
          list.push(newItem);

          this.setState({
            list,
            newItem:""
          });
    }
  }
  deleteItem(id){
    const list =[...this.state.list];
    const updatedList = list.filter(item=>item.id!==id);
    this.setState({list:updatedList})
  }
  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return(
      <div>
        <h1 className="App-header"> To-Do List</h1>
        <div className="container">
         <h2> Add an Item .......<br/></h2>
          <input type="text" className ="" placeholder="Write a toDo" required value={this.state.newItem}
          onChange={e=>this.updateInput(e.target.value)}></input><br/>
          <button className="btn btn-primary" onClick={()=>this.addItem(this.state.newItem)}>Add ToDo</button>
          <div className="list">
            <ul>
              {this.state.list.map(item=>{
              return(
                <li key={item.id}>
                <input type="checkbox" name="idDone"checked={item.isDone} onChange={()=>this.deleteItem(item.id)}></input>
                {item.value}
                <button className="btn btn-danger" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                </li>
              );
              })}
             
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;