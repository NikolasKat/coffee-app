export default function AppListItem(props) {
   return (
      <div className="w-[220px] h-[240px]  text-right p-6 text-[14px] bg-white/[.54] mt-3">
         <div className="flex justify-center opacity-100">
            <img src={props.src} alt="coffee-photo" />
         </div>
         <div>
            <h3>{props.name}</h3>
            <h3>{props.weight}</h3>
         </div>
         <h3>{props.price}</h3>
      </div>
   );
}
