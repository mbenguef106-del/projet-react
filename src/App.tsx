type MenuItem = {
  id: number;
  label: string;
  link: string;
};

const menuItems: MenuItem[] = [
  { id: 1, label: "Maison", link: "/" },
  { id: 2, label: "À propos", link: "/about" },
  { id: 3, label: "Service", link: "/service" },
  { id: 4, label: "Contact", link: "/contact" },
];

function App() {
  https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css

  return (
    
  // <div className=" ">
      
//          <div
//   className="min-h-screen bg-cover bg-center"
//   style={{ backgroundImage: "url('/image11.jpg')" }}
// >
  
//   <div className="fixed top-3 left-0 w-full px-6 max-w-[70vw] mx-auto">
//     <div className="grid grid-cols-2 items-center">

//         <div className="flex items-center gap-3">
//         <img
//           src="/logo-white.svg"
//           className="w-16 h-16"
//           alt="logo"
//         />
//       </div>
        <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/image11.jpg')" }}
    >
      <div className="fixed top-3 left-0 w-full px-6 max-w-[70vw] mx-auto">
        <div className="grid grid-cols-2 items-center">

          {/* LOGO */}
          <img src="/logo-white.svg" className="w-16 h-16" alt="logo" />

          {/* MENU */}
          <ul className="hidden md:flex justify-end gap-5 text-white">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
 


     
      {/* <div className="hidden md:flex items-center justify-end gap-5 text-white"> */}
        {/* <ul className="flex gap-5 text-md">
          <li><a href="#" className="hover:underline">Maison</a></li>
          <li><a href="#" className="hover:underline">À propos</a></li>
          <li><a href="#" className="hover:underline">Service</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul> */}
        

        <button className="inline-flex border border-white rounded-md px-9 py-3 text-md hover:underline">
          202-555-0188
        </button>
      {/* </div> */}

      
      <div className="flex justify-end md:hidden">
        <button className="text-green text-3xl">
          ☰
        </button>
      </div>

    // </div>
  {/* </div> */}

 
  <div className="w-full h-screen flex items-center justify-center text-white text-center">
    <div className="space-y-6">
      <h2 className="text-5xl">
        nous aimons tous <br />
        <span className="text-9xl">nature</span>
      </h2>

      <p className="text-2xl">
        Plonger votre regard au coeur de la nature, et vous <br />
        comprendrez tout mieux
      </p>

      <div className="flex justify-center">
        <button className="text-sm px-9 py-3 bg-amber-300 text-black rounded-2xl">
          commencer
        </button>
      </div>
    </div>
  </div>
// </div>
          {/* partie2 */}

         <div>
          <h1 className="flex items-center justify-center text-5xl text-green-900 px-2 py-20">
            Nos services</h1>
            <div className="  grid grid-cols-1 md:grid-cols-3  gap-2 items-center justify-center">
            <div className=" ">
                  <img src="/service-1.jpg" className="w-90h-110"  />
                 <h1 className="text-green-950 "> <span className="text-2xl">
           Conception de sites web </span><br />
           Mettez l'accent sur la manière dont vous <br /> pouvez aider
           et apporter des avantages <br /> à votre utilisateur.
           Utilisez un langage simple <br /> pour éviter toute confusion.</h1>
        </div> 

        <div className="">
  <img src="/service-2.jpg" className="w-90h-110" />

  <h1 className="text-green-950 mb-3"> <span className="text-2xl">
          Conception graphique</span><br />
Mettez l'accent sur la manière dont vous <br />pouvez aider et apporter des avantages à<br /> 
votre utilisateur. Utilisez un langage simple <br /> pour éviter toute confusion.</h1>
</div>
<div className=" ">
  <img src="/service-3.jpg" className="w-90h-110" />
     <h1 className="text-green-950 mb-3"> <span className="text-2xl">
           Conception de sites web </span><br />
Mettez l'accent sur la manière dont vous <br /> pouvez aider
 et apporter des avantages <br /> à votre utilisateur.
 Utilisez un langage simple <br /> pour éviter toute confusion.</h1>
</div>

 </div>
 
      </div>
       {/* PARTIE3 */}
      <div className="bg-[#eff1ea] min-h-[60vh] flex flex-col items-center justify-center text-center mt-30 px-4">
  
  <i className="fa-solid fa-quote-left text-3xl md:text-4xl text-green-900 mb-6"></i>

  <h1 className="text-xl sm:text-2xl md:text-3xl text-green-950 max-w-3xl leading-relaxed font-serif">
    « Originale et dotée d'une compréhension innée des besoins de ses clients,
    l'équipe de Love Nature est toujours un plaisir à côtoyer. »
  </h1>

     <div className="flex items-center gap-3">
        <img
          src="/imagef.png"
          className="w-14 h-14"
          alt="logo"
        />
      </div>
      <p>Jane Miller</p>
</div>
           {/* PARTIE4 */}
           <div className=" grid grid-cols-1 lg:grid-cols-2    items-center text-green-950">
        <div className="m-20 space-y-8">
          <h1> <span className="text-lg ">A PROPOS DE NOUS </span> <br />
          <span className="text-4xl mb-6 font-serif">Dites aux visiteurs de votre <br />site  qui vous êtes et <br />
             pourquoi  ils devraient choisir votre  entreprise.<br />
 <p className="text-lg leading-relaxed block">Car lorsqu'un visiteur arrive sur votre site web, vous lui <br /> êtes inconnu.
 Il doit apprendre à vous connaître pour <br /> avoir envie de lire vos articles
  de blog, de s'abonner <br /> à votre newsletter ou d'acheter vos produits.</p></span>

  <button className="text-sm border border-green-950 px-9 py-3 texte-green-950 hover:underline 
  hover:text-[#B7CE66] transition hover:border-[#B7CE66]">
    En savoir plus</button>
</h1>
</div>
<div className=" justify-self-end text-right md:px-12 pb-16 lg:pb-0">
  <img src="/leaf.jpg" className="w-100 h-130 m-20  pr-3" />
</div>

        </div>
       
         {/* PARTIE5 */}
        <section>
  
  <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
  style={{ backgroundImage: "url('/image5.jpg')" }}
>
  <div className="space-y-6 md:space-y-8 text-center max-w-3xl">

    <h1 className="text-4xl md:text-6xl text-white font-semibold">
      DES QUESTIONS ?
    </h1>

    <p className="text-base md:text-lg text-white leading-relaxed">
      Que vous soyez curieux de connaître les fonctionnalités,<br />
      de bénéficier d'un essai gratuit ou même d'obtenir des <br />informations
      pour la presse, nous sommes là pour <br />répondre à toutes vos questions.
    </p>

    <div className="flex justify-center">
      <button
        className="text-sm md:text-base rounded-md px-7 md:px-9 py-3
        text-green-950 bg-yellow-300 hover:bg-yellow-400 transition"
      >
        Parlons-en maintenant
      </button>
    </div>

  </div>
</div>

</section>
           {/* PARTIE6 */}
        
        <section className="grid grid-cols-1 md:grid-cols-3 items-center px-4 md:px-8 py-6 gap-6">
  
 
          <ul className=" flex flex-row justify-center md:justify-start gap-3 md:gap-4 
                 text-green-950 text-sm md:text-lg">
          <li><a href="#" className="hover:underline">Maison</a></li>
          <li><a href="#" className="hover:underline">À propos</a></li>
           <li><a href="#" className="hover:underline">Service</a></li>
           <li><a href="#" className="hover:underline">Contact</a></li>
           </ul>

 
            <div className="flex justify-center">
           <img
           src="/logo-green.svg"
            className="w-16 h-16"
      alt="Logo"
    />
  </div>

 
  <div className="text-green-950 text-lg justify-self-end
   md:text-lg text-center md:text-right">
    <h3>Aimer la nature par Tyler Moore</h3>
  </div>

</section>




      







 )
}

export default App




    
  
   
   
       
    
 