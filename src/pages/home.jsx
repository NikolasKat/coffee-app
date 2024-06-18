import AppList from "../conponents/coffeeList";
import AppFooter from "../conponents/footer";
import AppAbout from "../conponents/appAbout";
import { useState } from "react";

function HomePage() {
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
   return (
      <>
         <section className="items-center mr-auto ml-auto text-white text-center w-full min-h-[640px] bg-cover bg-no-repeat p-8 bg-[url('/main-bg.png')]">
            <h1 className="text-[40px] mb-4 mt-24">
               Everything You Love About Coffee
            </h1>
            <div className="flex justify-center">
               <img src="/Logo2.svg" alt="logo" />
            </div>
            <h2 className="text-[24px] mt-4 mb-4">
               We makes every day full of energy and taste <br />
               Want to try our beans?
            </h2>
            <button className="bg-#fff text-white-700 font-semibold hover:text-white py-2 px-4 border border-#ffffff-500 hover:border-transparent rounded">
               More
            </button>
         </section>

         <AppAbout
            title="About Us"
            descr="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face. Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now."
            src=""
         />

         <section className="text-center w-full min-h-[500px] bg-cover bg-no-repeat p-8 bg-[url('/mramar-bg.png')] mt-16 pt-16 pb-16">
            <h2 className="text-[24px] mb-9">Our best</h2>
            <AppList data={cards} countOfItems={3} />
         </section>

         <AppFooter />
      </>
   );
}

export default HomePage;
