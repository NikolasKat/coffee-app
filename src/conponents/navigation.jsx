import { Link } from "react-router-dom";

export default function AppHeader(props) {
   let className = "flex justify-between items-end max-w-[360px] text-xs";

   props.direction === "center"
      ? (className += " mt-0 mb-0 mr-auto ml-auto")
      : (className += "text-center absolute text-white top-4 left-4 text-xs ");

   return (
      <header className={className}>
         <Link className="mr-9" to="/home">
            <img src={props.logo} alt="logo" />
         </Link>

         <Link className="mr-9 mb-[4px]" to="/page1">
            Our coffee
         </Link>
         <Link className="mb-[4px]" to="/page2">
            For your pleasure
         </Link>
      </header>
   );
}
