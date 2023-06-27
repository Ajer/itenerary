import Task from './Task';


export default function ShowList({tasks,handleEditName,handleDeleteTask,handleEditSave,handleEditCancel})
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
       <Task key={tsk.id} editing={tsk.editing} checked={tsk.checked} taskLabel={tsk.name} handleDeleteTask={()=>handleDeleteTask(tsk.id)} handleEditName={()=>handleEditName(tsk.id)} 
       handleEditSave={()=>handleEditSave(tsk.id)} handleEditCancel={()=>handleEditCancel(tsk.id)} />
    );

    return (
        <div>
            {listItems}
        </div>
    );
}