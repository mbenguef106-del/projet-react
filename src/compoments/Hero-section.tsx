import { menuItems } from "../data/data";



export default function Herosection() {
  return (
    <div>
        <header   
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/image11.jpg')" }}
          >
            <nav className=" flex w-full px-6 max-w-[90vw] mx-auto items-center
            pt-6 justify-between">
              
      
            <img src="/logo-white.svg" className="size-16" alt="logo" />
            <div className="flex items-center gap-6 ">
      
              <ul className="hidden md:flex  gap-6 text-white">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <a href={item.link} className="hover:underline">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
      <button className=" border border-white text-white px-6 py-3 text-sm w-fit
                                hover:underline">
                   202-555-0188
              </button>
            </div>
      
            
            <nav className="flex justify-end md:hidden">
              <button className="text-green text-3xl">
                ☰
              </button>
            </nav>
      
          </nav>
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
        </header>
     
    </div>
  )
}
