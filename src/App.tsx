

import { menuItems } from "./data/data";
import Herosection from "./compoments/Hero-section";

import GrandSection from "./compoments/GrandSection";

import Testesection from "./compoments/Teste-section";
import About from "./compoments/About";  
import QuestionSection from "./compoments/QuestionSection";
import Close from "./compoments/Close";   





// const Partie: Partie[] = [
//   {
//     id: 1,
//     title: "Conception de sites web",
//     description:
//       "Mettez l'accent sur la manière dont vous pouvez aider et apporter des avantages à votre utilisateur. Utilisez un langage simple pour éviter toute confusion.",
//     image: "/service-1.jpg",
//   },
//   {
//     id: 2,
//     title: "Conception graphique",
//     description:
//       "Mettez l'accent sur la manière dont vous pouvez aider et apporter des avantages à votre utilisateur. Utilisez un langage simple pour éviter toute confusion.",
//     image: "/service-2.jpg",
//   },
//   {
//     id: 3,
//     title: "Création de contenu",
//     description:
//       "Mettez l'accent sur la manière dont vous pouvez aider et apporter des avantages à votre utilisateur. Utilisez un langage simple pour éviter toute confusion.",
//     image: "/service-3.jpg",
//   },
// ];

// src/types/about.ts
 








function App() {


  return (
    <div>
    
     <Herosection/>
  <Testesection/>
{/* <section>
         
          <h1 className="flex items-center justify-center text-5xl
           text-green-900 px-2  py-10  space-y-3">
            Nos services</h1>
            <div className="mx-auto h-1 w-22 bg-yellow-400"> </div>
           
            
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 m-7 p-8">
        {Partie.map((partie) => (
          <div
            key={partie.id}
            className="w-90 h-110"
          >
            <img
              src={partie.image}
              alt={partie.title}
              className="w-full h-56 object-cover mb-4"
            />

            <h2 className="text-green-950 space-y-4 text-2xl">
              {partie.title}
            </h2>

            <p className="text-green-900">
              {partie.description}
            </p>
          </div>
        ))}
      </div>

</section> */}
 
    
 <GrandSection/>
<About/>
<QuestionSection/>
  <Close/>





      





</div>

 )
}


export default App




    
  
   
   
       
    
 