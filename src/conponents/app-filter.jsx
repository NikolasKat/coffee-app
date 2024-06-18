import { useState } from "react";

function AppFilter(props) {
   const [temp, setTemp] = useState("");
   const [filt, setFilt] = useState("");

   const onUpdateSearch = (e) => {
      const temp = e.target.value;

      setTemp(temp);
      props.onUpdateSearch(temp);
   };

   const onUpdateFilter = (e) => {
      const filt = e.target.name;
      // console.log(filt);
      setFilt(filt);
      props.onUpdateFilter(filt);
   };

   return (
      <nav className="flex flex-wrap justify-between items-center max-w-[700px] h-14 mt-0 mb-12 mr-auto ml-auto">
         <div className="search flex justify-between items-center min-w[600px] mt-4">
            <h4>Lookiing for</h4>
            <input
               className="w-[180px] min-h-[30px] drop-shadow-md p-2 ml-4"
               type="text"
               placeholder="start typing here..."
               value={temp}
               onChange={onUpdateSearch}
            />
         </div>
         <div className="filter flex justify-between items-center mt-4">
            <h4>Or filter</h4>
            <nav>
               <button
                  className="h-8 px-3 rounded-md border border-slate-200 text-slate-900 ml-3 mr-1"
                  type="button"
                  name="Brazil"
                  onClick={onUpdateFilter}
               >
                  Brazil
               </button>
               <button
                  className="h-8 px-3 rounded-md border border-slate-200 text-slate-900 mx-1"
                  type="button"
                  name="Kenya"
                  onClick={onUpdateFilter}
               >
                  Kenya
               </button>
               <button
                  className="h-8 px-3 rounded-md border border-slate-200 text-slate-900 mx-1"
                  type="button"
                  name="Columbia"
                  onClick={onUpdateFilter}
               >
                  Columbia
               </button>
               <button
                  className="h-8 px-3 rounded-md border border-slate-200 text-slate-900 mx-1"
                  type="button"
                  name=""
                  onClick={onUpdateFilter}
               >
                  All
               </button>
            </nav>
         </div>
      </nav>
   );
}

export default AppFilter;
