import {taskList} from './taskList.js'
import {useState,useEffect} from 'react';
import Task from './Task';
import ShowList from './ShowList';


export default function AddTask()
{
    const [theText,setTheText] = useState("");

    const [tasks,setTasks] = useState(taskList);

    const [nextId,setNextId] = useState(0);


    function handleAddTask()
    {
        let n = nextId + 1;

        alert('n=' + n);

        setTasks([
          ...tasks,
          {
            id:n,
            name:theText
          },
        ])
        
        setNextId(n);

        setTheText('');
    }
    
    useEffect(() => {  
      alert('useEffect');
      let n=0;    
      tasks.map(elem =>{
        n = elem.id;
        return n;
      } 
      );
      setNextId(n);
    }, []); 


    function handleChange(event){
      setTheText(event.target.value);
    }

    function handleDeleteTask(id)
    {
        alert(id);

        setTasks(
           tasks.filter(elem=>
             elem.id!==id
           )
        )

        alert('delete');
     }

     function handleEditNameTask(id)
     {
          alert(id);

          /* let editedTask = [
            ...tasks.slice(0,id),
          {

          }
           ...tasks.slice(id)
          ] */

          alert('edit');
     }


    return(
        <div className='task_container'>
           <input type="text" id="addTask" name="addTask" onChange={handleChange} className="add_input" placeholder='Add Task' value={theText} />
           <button onClick={handleAddTask} className="button btn_corr">Add</button>
           <ShowList tasks={tasks} handleDeleteTask={handleDeleteTask} handleEditNameTask={handleEditNameTask} />
        </div>
    );
}