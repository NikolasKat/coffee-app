export default function AppListItem(props) {
   return (
      <div className="w-[220px] h-[240px]  text-right p-6 text-[12px] bg-white/[.54] mt-3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
         <div className="flex justify-center opacity-100">
            <img src={props.src} alt="coffee-photo" />
         </div>
         <div>
            <h3 className="mt-3">
               {props.name} {props.weight}
            </h3>
            <h3>{props.country}</h3>
         </div>
         <h3>{props.price}</h3>
      </div>
   );
}
