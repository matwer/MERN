import './App.css';
import React, {useState} from 'react';

import Tasks from './components/Tasks';
import NewTask from './components/NewTask';


function App() {
  
  // create a set of default tasks
  const [tasks, setTasks] = useState ([
    {name: "Get Python Black Belt", status: false},
    {name: "Get Java Black Belt", status: false},
    {name: "Get React Black Belt", status: false}
  ])

  const addTask = (newTask) => {
    // vaerify you're getting what you think you're getting
    // console.log(newTask);

    // add the task to the list of tasks - spread the 
    // existing array and append the new Task 
    setTasks([...tasks,newTask]);
  }

  // update a task
  const updateTask = (idx) => {
    // verify we're getting the index
    // console.log(idx);

    // make a copy of the array
    // flip the status to the opposite of the current value
    // setTasks to the copy
    const copyTasks = [...tasks];
    copyTasks[idx].status = !copyTasks[idx].status;
    setTasks(copyTasks);
  }

  const deleteTask = (deleteIdx) => {
    // verify you're getting the index
    // console.log(deleteIdx);

    // update the list of tasks by filtering out
    // the deleted task
    // const newTasks = tasks.filter((task, i) => {
    //   if (deleteIdx !== i) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // })

    // ...and as a tenary
    // const newTasks = tasks.filter((task, i) => 
    //   i !== deleteIdx ? true : false );
    
      // user setTasks to update the list of tasks
      setTasks(tasks.filter((task, i) => 
      i !== deleteIdx ? true : false ));
  }
  
  return (
    <div className="App">
      {/* <h1>Hello from App!</h1> */}
      {/* pass the addTask fcn to NewTask  */}
      <NewTask addTask={addTask}/>
      {
        // pass in EVERYTHING Tasks.jsx needs to do it's work
        tasks.map((task, idx) => {
          return <Tasks 
            key={idx}
            task={task}
            idx={idx}
            updateTask={updateTask} 
            deleteTask={deleteTask}/>
        })
      }
    </div>
  );
}

export default App;
