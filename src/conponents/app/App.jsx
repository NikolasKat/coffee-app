import AppHeader from "../header/header";
import AppFooter from "../footer/footer";

import "./App.css";

function App() {
   return (
      <>
         <section className="items-center mr-auto ml-auto text-center w-full min-h-[640px] bg-cover bg-no-repeat p-8 bg-[url('/main-bg.png')]">
            <AppHeader logo="/Logo.svg" direction="left" />
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
         <section className="text-black text-center max-w-[590px] mt-14 mb-14 ml-auto mr-auto">
            <h2 className="text-[24px]">About Us</h2>
            <div className="flex justify-center mt-3 mb-10">
               <img src="/black-logo.png" alt="logo" />
            </div>
            <p className="text-[14px]">
               Extremity sweetness difficult behaviour he of. On disposal of as
               landlord horrible. Afraid at highly months do things on at.
               Situation recommend objection do intention so questions. As
               greatly removed calling pleased improve an. Last ask him cold
               feel met spot shy want. Children me laughing we prospect answered
               followed. At it went is song that held help face.
               <br />
               <br />
               Now residence dashwoods she excellent you. Shade being under his
               bed her, Much read on as draw. Blessing for ignorant exercise any
               yourself unpacked. Pleasant horrible but confined day end
               marriage. Eagerness furniture set preserved far recommend. Did
               even but nor are most gave hope. Secure active living depend son
               repair day ladies now.
            </p>
         </section>
         <AppFooter />
      </>
   );
}

export default App;
