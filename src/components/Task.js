export default function Task({key,editing,checked,taskLabel,handleEditName,handleDeleteTask,handleEditSave,handleEditCancel}) 
{
   let src = (checked) ? require('../check_30.png'): require('../goTo1320.png');

   return(
    <div className='task'>
       {/* <input type='checkbox' value='tsk_chkBox' name='tsk_chkBox'/> */}
       <img  src={src} value='tsk_chkBox'  name='tsk_chkBox'></img>    {/* src={require('../check-lg.svg').default */}
       <label className="label_corr" for='tsk_chkBox'>{taskLabel}</label>
       
       {!editing && <button onClick={handleEditName} className="button btn_corr">Edit</button>}
       {!editing && <button onClick={handleDeleteTask} className="button btn_corr">Delete</button>}

       {editing && <button onClick={handleEditSave} className="button btn_corr">Save</button>}
       {editing && <button onClick={handleEditCancel} className="button btn_corr">Cncl</button>}
    </div>
   );
}
