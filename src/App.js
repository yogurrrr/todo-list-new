import React from 'react';
import SubmitForm from './Form';
import TasksList from './TaskList'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={tasks: []}

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task){
    this.setState((previousState) => {
      return { 
        tasks: previousState.tasks.concat(task) 
      };
    });
  }

  removeTask(id){
      const tasks = this.state.tasks.filter(element => (element.id !== id));
      this.setState({ tasks: tasks });
  }

  render(){
    return (
      <div className="App">
        <SubmitForm addTask={this.addTask}/>
        <TasksList tasks={this.state.tasks} removeTask={this.removeTask}/>
      </div>
    );
  }
}

export default App;