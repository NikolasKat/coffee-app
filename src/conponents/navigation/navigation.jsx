// import "./header";

export default function AppHeader(props) {
   let className =
      "header flex justify-between max-w-[360px] text-xs items-baseline";

   props.direction === "center"
      ? (className += " mt-0 mb-0 mr-auto ml-auto")
      : (className += " text-center");

   return (
      <header className={className}>
         <a href="#">
            <img src={props.logo} alt="logo" />
         </a>

         <a href="#">Our coffee</a>
         <a href="#">For your pleasure</a>
      </header>
   );
}
