import AppHeader from "../navigation/navigation";

export default function AppHeaderNoNav(props) {
   let className = `items-center mr-auto ml-auto text-white text-center w-full bg-cover bg-no-repeat p-8 bg-[url('/${props.src}')]`;
   if (props.width) {
      className += ` min-h-[${props.width}px]`;
   }
   return (
      <section className={className}>
         <AppHeader logo="/Logo.svg" direction="left" />
         <h1 className="text-[40px] mb-4 mt-16">{props.title}</h1>
      </section>
   );
}
