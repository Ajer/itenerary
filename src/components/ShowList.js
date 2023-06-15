import Task from './Task';


export default function ShowList({tasks,handleEditNameTask,handleDeleteTask})
{
     /* function handleEditTask(){
        alert('edit');
      } */
  
    /* function handleDeleteTask(id){
        alert(id);
        
        setTasks(
           tasks.filter(elem=>
             elem.id!==id
           )
        )
        alert('delete');
      } */

    let listItems = tasks.map(tsk =>
       <Task key={tsk.id}  taskLabel={tsk.name} handleDeleteTask={()=>handleDeleteTask(tsk.id)} handleEditNameTask={()=>handleEditNameTask(tsk.id)} />
    );

    return (
        <div>
            {listItems}
        </div>
    );
}