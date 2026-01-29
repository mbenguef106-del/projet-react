
import type { About } from "../types/about";
import { abouts } from "../data/abouts";

export default function About() {
  return (
    <div>
       <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-green-950">
      {abouts.map((about) => (
        <div key={about.id} className="flex flex-col md:flex-row items-center">
          
          {/* Texte */}
          <div className="m-20 space-y-8">
            <span className="text-lg">{about.title}</span>
            <h1 className="text-4xl mb-6 font-serif">
              {about.heading}
            </h1>
            <p className="text-lg leading-relaxed">{about.description}</p>

            <button className="text-sm border border-green-950 px-9 py-3 text-green-950 hover:underline hover:text-[#B7CE66] transition hover:border-[#B7CE66]">
              {about.buttonText}
            </button>
          </div>

          {/* Image */}
          <div className="justify-self-end text-right md:px-12 pb-16">
            <img
              src={about.image}
              className="w-100 h-130 m-20 pr-3"
              alt={about.title}
            />
          </div>

        </div>
      ))}
    </div>
    </div>
  )
}
