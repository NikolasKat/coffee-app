export default function AppAbout(props) {
   if (props.src) {
      return (
         <section className="text-center flex justify-center align-middle flex-wrap mt-7">
            <div className="">
               <img src={props.src} alt="proto" />
            </div>
            <div className="info w-80 mt-9">
               <h2 className="text-[24px]">{props.title}</h2>
               <div className="flex justify-center mt-3 mb-10">
                  <img src="/black-logo.png" alt="logo" />
               </div>
               <p className="text-[14px] ">{props.descr}</p>
            </div>
         </section>
      );
   } else {
      return (
         <section className="text-center flex justify-center align-middle flex-wrap mt-7">
            <div className="info w-[600rem] mt-9">
               <h2 className="text-[24px]">{props.title}</h2>
               <div className="flex justify-center mt-3 mb-10">
                  <img src="/black-logo.png" alt="logo" />
               </div>
               <p className="text-[14px] ">{props.descr}</p>
            </div>
         </section>
      );
   }
}
