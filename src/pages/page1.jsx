import AppFooter from "../conponents/footer";
import AppAbout from "../conponents/appAbout";
import AppFilter from "../conponents/app-filter";
import AppList from "../conponents/coffeeList";

import { useState } from "react";

function PageOne() {
   const [cards, setCards] = useState([
      {
         name: "Solimo Coffee Beans",
         weight: "2 kg",
         price: 10.73,
         country: "Brazil",
         src: "/list1.png",
      },
      {
         name: "Presto Coffee Beans",
         weight: "1 kg",
         price: 15.6,
         country: "Kenya",
         src: "/list2.png",
      },
      {
         name: "AROMISTICO Coffee",
         weight: "2 kg",
         price: 20.5,
         country: "Columbia",
         src: "/list3.png",
      },
      {
         name: "AROMISTISSOLATTE Coffee",
         weight: "1 kg",
         price: 12.76,
         country: "Columbia",
         src: "/list4.png",
      },
      {
         name: "Solyare Coffee Beans",
         weight: "2 kg",
         price: 10.73,
         country: "Kenya",
         src: "/list1.png",
      },
      {
         name: "Prossecco Coffee Beans",
         weight: "1 kg",
         price: 15.6,
         country: "Brazil",
         src: "/list2.png",
      },
      {
         name: "AREMUARRE Coffee",
         weight: "2 kg",
         price: 20.5,
         country: "Brazil",
         src: "/list3.png",
      },
      {
         name: "PISTOLYARE Coffee",
         weight: "1 kg",
         price: 12.76,
         country: "Kenya",
         src: "/list4.png",
      },
   ]);
   const [temp, setTemp] = useState("");
   const [filt, setFilt] = useState("");

   const onFilter = (items, filt) => {
      if (filt.length === 0) {
         console.log("Base arr");
         return items;
      } else {
         console.log("New arr");
         return items.filter((item) => item.country === filt);
      }
   };

   const onUpdateFilter = (filt) => {
      setFilt(filt);
   };

   const onSearch = (items, temp) => {
      if (temp.length === 0) {
         return items;
      } else {
         return items.filter((item) => item.name.indexOf(temp) > -1);
      }
   };

   const onUpdateSearch = (temp) => {
      setTemp(temp);
   };

   const newData = onFilter(onSearch(cards, temp), filt);
   return (
      <>
         <section className="items-center mr-auto ml-auto text-white text-center w-full bg-cover bg-no-repeat p-8 bg-[url('/bg-small.png')] min-h-[260px]">
            <h1 className="text-[40px] mb-4 mt-16">Our Coffee</h1>
         </section>
         <AppAbout
            title="About our beans"
            descr="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."
            src="/about1.png"
         />
         <hr className="relative border-[1px] border-black w-[240px] h-[1px] mt-8 mb-0 mr-auto ml-auto" />
         <section className="max-w-[800px] p-9">
            <AppFilter
               onUpdateSearch={onUpdateSearch}
               onUpdateFilter={onUpdateFilter}
            />
            <AppList data={newData} countOfItems={6} />
         </section>
         <AppFooter />
      </>
   );
}

export default PageOne;
