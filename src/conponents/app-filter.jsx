function AppFilter() {
   return (
      <nav className="flex justify-between items-center w-[700px] h-14 mt-0 mb-0 mr-auto ml-auto">
         <div className="search flex justify-between items-center min-w[600px]">
            <h4>Lookiing for</h4>
            <input
               className="w-[180px] min-h-[30px] drop-shadow-md p-2 ml-4"
               type="text"
               placeholder="start typing here..."
            />
         </div>
         <div className="filter flex justify-between items-center">
            <h4>Or filter</h4>
            <nav>
               <button
                  className="h-8 px-3 rounded-md border border-slate-200 text-slate-900 ml-3 mr-1"
                  type="button"
               >
                  Brazil
               </button>
               <button className="h-8 px-3 rounded-md border border-slate-200 text-slate-900 mx-1">
                  Kenya
               </button>
               <button className="h-8 px-3 rounded-md border border-slate-200 text-slate-900 mx-1">
                  Columbia
               </button>
            </nav>
         </div>
      </nav>
   );
}

export default AppFilter;
