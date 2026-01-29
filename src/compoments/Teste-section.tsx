

import { Partie } from "../data/data";

export default function Testesection() {
  return (
    <div>
      <section>
         
          <h1 className="flex items-center justify-center text-5xl
           text-green-900 px-2  py-10  space-y-3">
            Nos services</h1>
            <div className="mx-auto h-1 w-22 bg-yellow-400"> </div>
           
            
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 m-7 p-8">
        {Parti.map((partie) => (
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

</section>
    </div>
  )
}
