import Header from './Header';
import GUIList from './GUIList';
import { useState } from 'react';

export default function Itinerary(){

     const [edit,setEdit] = useState(false);

     function childToParent(childData)
     {
          setEdit(childData);
     }

    const editMark = (edit)?'/(edit)':'';   // const
    
    return(
        <>
         
          <div className="itinerary_container">           
            <a href="" type="button"><i class="lni lni-cog"></i></a>
            <Header className={"header_container"} city={'Prague'} editMark={editMark}/>

            <GUIList childToParent={childToParent} />
         </div>
        </>
    )
}