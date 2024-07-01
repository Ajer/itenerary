export default function Task({editing,checked,taskLabel,handleEditName,handleDeleteTask,handleEditSave,handleEditCancel,error}) 
{
   let src = (checked) ? require('../check_30.png'): require('../goTo3030.png');

   return(
    <div className='task'>
       {/* <input type='checkbox' value='tsk_chkBox' name='tsk_chkBox'/> */}

       <img  src={src} value='tsk_chkBox'  name='tsk_chkBox' alt=''></img>    {/* src={require('../check-lg.svg').default */}
       <label className="label_corr" >{taskLabel}</label> {/* for='tsk_chkBox' */} 
       
       {!editing && !error && <button   onClick={handleEditName} className="button btn_corr">Edit</button>}
       {!editing && !error && <button  onClick={handleDeleteTask} className="button btn_corr">Delete</button>}

       {editing && !error && <button onClick={handleEditSave} className="button btn_corr">Save</button>}
       {editing && !error && <button onClick={handleEditCancel} className="button btn_corr">Cncl</button>}
    </div>
   );
}
