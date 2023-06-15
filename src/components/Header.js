
export default function Header({text,className}){
    return(
      <h2 className={className}>{text + ' Itinerary'}</h2>
    );
}