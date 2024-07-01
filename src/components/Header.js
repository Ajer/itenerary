
export default function Header({text,className}){
    return(
      <div className="row_header">
         {/* <button className="button help_btn_class">Help</button> */}
         <h2 className={className} style={{textAlign:"center"}}>{text + ' Itinerary'}</h2>
      </div>
    );
}