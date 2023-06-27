import Header from './Header';
import GUIList from './GUIList';

export default function Itinerary(){
    return(
        <div className="itinerary_container">
            <Header className={"header_container"} text={'Prague'} />
            <GUIList/>
        </div>
    )
}