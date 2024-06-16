import { Link } from "react-router-dom";

export default function AppHeader(props) {
   let className = "flex justify-between items-center max-w-[360px] text-xs";

   props.direction === "center"
      ? (className += " mt-0 mb-0 mr-auto ml-auto")
      : (className += " text-center");

   return (
      <header className={className}>
         <Link to="/home">
            <img src={props.logo} alt="logo" />
         </Link>

         <Link to="/page1">Our coffee</Link>
         <Link to="/page2">For your pleasure</Link>
      </header>
   );
}
