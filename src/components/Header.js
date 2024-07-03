
export default function Header({city,className,editMark}){
    return(
      <div className="row_header">
         {/* <button className="button help_btn_class">Help</button> */}
         <h2 className={className} style={{textAlign:"center"}}>{city + ' Itinerary' + editMark}</h2>
      </div>
    );
}