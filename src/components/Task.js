export default function Task({key,taskLabel,handleEditNameTask,handleDeleteTask}) 
{
     

   return(
    <div className='task'>
       <input type='checkbox' value='tsk_chkBox' name='tsk_chkBox'/>
       <label for='tsk_chkBox'>{taskLabel}</label>
       <button onClick={handleEditNameTask} className="button btn_corr">Edit</button>
       <button onClick={handleDeleteTask} className="button btn_corr">Delete</button>
    </div>
   );
}
