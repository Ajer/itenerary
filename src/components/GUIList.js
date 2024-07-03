import {taskList} from './taskList.js'
import {useState,useEffect} from 'react';
import ShowList from './ShowList';
import DOMPurify from 'dompurify';
import Swal from 'sweetalert2';


export default function GUIList({childToParent})
{
    const [theText,setTheText] = useState("");

    const [tasks,setTasks] = useState(taskList);

    const [nextId,setNextId] = useState(0);

    const [originalTasks,setOriginalTasks] = useState([...tasks]);

    const [edit,setEdit] = useState(false);

    const [checkChanged,setCheckChanged] = useState(false);

    const [error,setError] = useState(false);

    const [addInputClsName,setAddInputClsName] = useState("add_input add_input_normal");


    function handleAddTask()
    {

        const isValid = theText.trim() !== '' && theText!==undefined && !error;

        if (isValid)
        {
          
        
          let n = nextId + 1;

          /*DOMPurify.setConfig({
            IN_PLACE: true, // In place mode for faster sanitization,
            ALLOWED_TAGS:['b','i'], // Only allow tags specified in the whitelist above
            ADD_ATTR: ['target'] // Allow elements with the target attribute
          })*/

          //let txt = DOMPurify.sanitize(theText,{ sanitize: true });
          //alert(txt);


          // alert('n=' + n);

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
        else if (error){
          setTheText('');
          setError(false);
          setAddInputClsName("add_input add_input_normal");
        }     
    }

    function checkCharacters(event)
    {
      if (event.target.value.includes('<')||event.target.value.includes('>')||event.target.value.includes('&'))
      //event.target.value.includes('')||event.target.value.includes(' '))
      {
        return false;
      }
      else
      {
        return true;
      }
    }
    
    useEffect(() => {  

      let n=0;
      tasks.forEach(elem=>{       
           n = elem.id;       /* get the highest value of elem.id*/
      });

      setNextId(n);
    }, []); 

     function handleClick()
     {
         if (error)
         {
           setTheText('');
           setError(false);
           setAddInputClsName("add_input add_input_normal");
         }
     }

    function handleChange(event){      /* every text-character is gradually saved as a word in 'theText'*/

     if (!error)  
     {
       if (checkCharacters(event))
       {
          setTheText(event.target.value);            /* event.target.id also accessible */
          /* setAddInputClsName("add_input add_input_normal"); */
        }
       else
       {
        //  alert('error');
         setTheText('Invalid character \'' + event.target.value + '\'');
         setError(true);
         setAddInputClsName("add_input add_input_error");
       }
     }
    }

    function handleDeleteTask(id)
    {
        // alert(id);

        Swal.fire({
          title: "Are you sure you want to delete this item?",
          text: "You won't be able to revert this!",
          icon: "",
          showCancelButton: true,
          confirmButtonColor: "#d33", // "#3085d6"
          cancelButtonColor: "#425187",
          confirmButtonText: "Yes, delete !"
        }).then((result) => {
          if (result.isConfirmed) {

            setTasks(
              tasks.filter(elem=>    /* keep every task but where elem.id===id */
                elem.id!==id
              )
           );

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              // icon: "success"
            });
          }
        });

        
     }

     function handleEditName(id)  
     {
          // alert(id);

          setOriginalTasks([...tasks]);

          let n='';
          tasks.forEach(elem=>{
            if (elem.id===id)
            {
               n = elem.name;
            }
          });

          // alert(n);

          setTheText(n);

          // alert('edit');

           let theItem = tasks.filter(tsk =>   // ny lista med 1 task (object)
               (tsk.id===id)
           );  
        
          //  alert(theItem[0].name);

           setTasks([
             {id:theItem[0].id,
              name:theItem[0].name,
              editing:true,
              checked:theItem[0].checked
             }]
            ); 

           setEdit(true);

           setAddInputClsName("add_input add_input_edit");

           childToParent(true);
 
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
 
    function handleToggleChecked(id)
    {

        let theItem = tasks.filter(tsk =>   // ny lista med 1 task (object)
               (tsk.id===id)
        );

        setTasks([
          {id:theItem[0].id,
           name:theItem[0].name,
           editing:true,
           checked:!theItem[0].checked
          }]
         ); 

         setCheckChanged(true);
    }

     function handleEditSave(id)
     {
          // alert('save');

          setTasks(originalTasks.map(oTsk=>{   /* for every task */
            if (oTsk.id!==id)          /*if task is not the one with tsk.id===id*/
            {
              return oTsk;             /*return it and leave it as it is*/
            }
            else{
              if (checkChanged)
              {
                return {id:oTsk.id,name:theText,editing:false,checked:!oTsk.checked};   /* return a new object where name is 'theText' and  checked reversed */
              }
              else
              {
                return {id:oTsk.id,name:theText,editing:false,checked:oTsk.checked};   /*only name is changed*/ 
              }
            }
           })
          );
          setTheText('');
          setEdit(false);
          setCheckChanged(false);
          setAddInputClsName("add_input add_input_normal");
          childToParent(false);
     }
     
     
     function handleEditCancel(id)
     {
        //  alert('cancel');

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
        setCheckChanged(false);
        setAddInputClsName("add_input add_input_normal");
        childToParent(false);
     }

    /*  function removeElement(htmlId)
      {
       document.getElementById(htmlId).style.display = "none";
      } */

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

           <input type="text" id="addTask" name="addTask" onClick={handleClick} onChange={handleChange} className={addInputClsName} placeholder='Add Task' value={theText} />
           {!edit && <button onClick={handleAddTask} className="button btn_corr">Add</button>}         
           
           <ShowList tasks={tasks} handleDeleteTask={handleDeleteTask} handleEditName={handleEditName} handleEditSave={handleEditSave} handleEditCancel={handleEditCancel} handleToggleChecked={handleToggleChecked} error={error} />
    
        </div>
    );
}