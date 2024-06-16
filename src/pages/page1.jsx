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
         src: "/list1.png",
      },
      {
         name: "Presto Coffee Beans",
         weight: "1 kg",
         price: 15.6,
         src: "/list2.png",
      },
      {
         name: "AROMISTICO Coffee",
         weight: "2 kg",
         price: 20.5,
         src: "/list3.png",
      },
      {
         name: "AROMISTISSOLATTE Coffee",
         weight: "1 kg",
         price: 12.76,
         src: "/list4.png",
      },
      {
         name: "Solimo Coffee Beans",
         weight: "2 kg",
         price: 10.73,
         src: "/list1.png",
      },
      {
         name: "Presto Coffee Beans",
         weight: "1 kg",
         price: 15.6,
         src: "/list2.png",
      },
      {
         name: "AROMISTICO Coffee",
         weight: "2 kg",
         price: 20.5,
         src: "/list3.png",
      },
      {
         name: "AROMISTISSOLATTE Coffee",
         weight: "1 kg",
         price: 12.76,
         src: "/list4.png",
      },
   ]);

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
         <section className="min-w-[600px] p-9">
            <AppFilter />
            <AppList data={cards} countOfItems={6} />
         </section>
         <AppFooter />{" "}
      </>
   );
}

export default PageOne;
