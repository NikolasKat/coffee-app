export default function AppHeaderNoNav(props) {
   let className = `items-center mr-auto ml-auto text-white text-center w-full bg-cover bg-no-repeat p-8 bg-[url('/bg-small1.png')]`;
   if (props.width) {
      className += ` min-h-[${props.width}px]`;
   }

   // if (props.title === "For your pleasure") {
   //    className += " bg-[url('/bg-small1.png')]";
   // } else {
   //    className += " bg-[url('/bg-small.png')]";
   // }

   return (
      <section className={className}>
         <h1 className="text-[40px] mb-4 mt-16">{props.title}</h1>
      </section>
   );
}
