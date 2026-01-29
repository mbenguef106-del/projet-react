import { close } from "../data/closes";
export default function Close() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 items-center px-4 md:px-8 py-6 gap-6">

      <ul
        className="flex flex-row justify-center md:justify-start gap-3 md:gap-4 
                   text-green-950 text-sm md:text-lg"
      >
        {close.map((item) => (
          <li key={item.id}>
            <a href={item.link} className="hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <img
          src="/logo-green.svg"
          className="w-16 h-16"
          alt="Logo"
        />
      </div>

      <div
        className="text-green-950 text-lg justify-self-end
                   text-center md:text-right"
      >
        <h3>Aimer la nature par Tyler Moore</h3>
      </div>

    </section>
  );
}
