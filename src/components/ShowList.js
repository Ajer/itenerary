import Task from './Task';


export default function ShowList({tasks,handleEditName,handleDeleteTask,handleEditSave,handleEditCancel,handleToggleChecked,error})
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
       handleEditSave={()=>handleEditSave(tsk.id)} handleEditCancel={()=>handleEditCancel(tsk.id)} handleToggleChecked={()=>handleToggleChecked(tsk.id)} error={error} />
    );

    return (
        <div>
            {listItems}
        </div>
    );
}