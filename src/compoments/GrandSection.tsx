
import { RiDoubleQuotesL } from "react-icons/ri";
import { grands } from "../data/grands"; 
export default function GrandSection() {
  return (
    <div>
      <div className="bg-[#eff1ea] min-h-[60vh] flex flex-col items-center justify-center text-center mt-30 px-4">
      
      {grands.map((grand) => (
        <div
          key={grand.id}
          className="flex flex-col items-center justify-center gap-4"
        >
          <RiDoubleQuotesL className="text-6xl text-green-900" />

          <h1
            className="text-xl sm:text-2xl md:text-3xl text-green-950 max-w-3xl
            leading-relaxed font-serif meie-script-regular"
          >
            « {grand.quote} »
          </h1>

          <div className="flex items-center gap-3">
            <img
              src={grand.image}
              className="w-14 h-14 rounded-full"
              alt={grand.author}
            />
          </div>

          <p className="text-green-900 font-medium">
            {grand.author}
          </p>
        </div>
      ))}

    </div>
    </div>
  )
}
