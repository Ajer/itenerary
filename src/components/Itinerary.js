import Header from './Header';
import AddTask from './AddTask';

export default function Itinerary(){
    return(
        <div className="itinerary_container">
            <Header className={"header_container"} text={'Prague'} />
            <AddTask/>
            {/* <Task /> */}
        </div>
    )
}