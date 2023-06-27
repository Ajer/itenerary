import {taskList} from './taskList.js'
import {useState,useEffect} from 'react';
import ShowList from './ShowList';


export default function GUIList()
{
    const [theText,setTheText] = useState("");

    const [tasks,setTasks] = useState(taskList);

    const [nextId,setNextId] = useState(0);

    const [originalTasks,setOriginalTasks] = useState([...tasks]);

    const [edit,setEdit] = useState(false);

    const [addInputClsName,setAddInputClsName] = useState("add_input add_input_normal");


    function handleAddTask()
    {
          let n = nextId + 1;

          alert('n=' + n);

          setTasks([      /* add a task (object) at the end of the list*/
          ...tasks,
           {
             id:n,
             name:theText,
             editing:false,
             checked:false
           }
         ])
        
         setNextId(n);

         setTheText('');
      
    }

    function checkCharacter(event)
    {
      if (event.target.value==='<')
      {
        return false;
      }
      return true;
    }
    
    useEffect(() => {  

      let n=0;
      tasks.forEach(elem=>{       
           n = elem.id;       /* get the highest value of elem.id*/
      });

      setNextId(n);
    }, []); 


    function handleChange(event){      /* every text-character is gradually saved as a word in 'theText'*/
       /* if (checkCharacter(event))
       { */
          setTheText(event.target.value);
       /* }
       else{
         setAddInputClsName("add_input add_input_error");
       } */
    }

    function handleDeleteTask(id)
    {
        alert(id);

        setTasks(
           tasks.filter(elem=>    /* keep every task but where elem.id===id */
             elem.id!==id
           )
        )

        alert('delete');
     }

     function handleEditName(id)  
     {
          alert(id);

          setOriginalTasks([...tasks]);

          let n='';
          tasks.forEach(elem=>{
            if (elem.id===id)
            {
               n = elem.name;
            }
          });

          alert(n);

          setTheText(n);

          alert('edit');

           let theItem = tasks.filter(tsk =>   // ny lista med 1 task (object)
               (tsk.id===id)
           );  
        
           alert(theItem[0].name);

           setTasks([
             {id:theItem[0].id,
              name:theItem[0].name,
              editing:true,
              checked:theItem[0].checked
             }]
            ); 

           setEdit(true);
 
          /* setTasks(tasks.map(tsk=>{
            if (tsk.id!==id)
            {
              return tsk;      
            }
            else{
              return {id:tsk.id,name:tsk.name,editing:true};
            }
          })
          );  */

     }
 
     function handleEditSave(id)
     {
          alert('save');

          setTasks(originalTasks.map(oTsk=>{   /* for every task */
            if (oTsk.id!==id)          /*if task is not the one with tsk.id===id*/
            {
              return oTsk;             /*return it*/
            }
            else{
              return {id:oTsk.id,name:theText,editing:false,checked:oTsk.checked};   /* else return a new object where name is 'theText' and  editing=false */
            }
           })
          );
          setTheText('');
          setEdit(false);
     }
     
     
     function handleEditCancel(id)
     {
         alert('cancel');

         setTasks(
            [...originalTasks]
         );

         /* setTasks(tasks.map(tsk=>{
          if (tsk.id!==id)
          {
            return tsk;
          }
          else{
            return {id:tsk.id,name:tsk.name,editing:false}; 
          }
         })
        ); */
        setTheText('');
        setEdit(false);
     }

     function removeElement(htmlId)
     {
      document.getElementById(htmlId).style.display = "none";
     }

     /* function updateSquares(index,cpy){
      setSquares(elems => {
        return [
          ...elems.slice(0, index),
                        cpy[index],
          ...elems.slice(index + 1),
        ]
      })
    } */

    return(
        <div className='task_container'>


           <input type="text" id="addTask" name="addTask" onChange={handleChange} className={addInputClsName} placeholder='Add Task' value={theText} />
           {!edit && <button onClick={handleAddTask} className="button btn_corr">Add</button>}         
           
           <ShowList tasks={tasks} handleDeleteTask={handleDeleteTask} handleEditName={handleEditName} handleEditSave={handleEditSave} handleEditCancel={handleEditCancel} />
          
           <div><button className="button help_btn_class btn_corr_top">Help</button></div>
        </div>
    );
}