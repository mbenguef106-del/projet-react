

import { questions } from '../data/questions';
export default function QuestionSection() {
  return (
    <div>
            
    <>
      {questions.map((section) => (
        <section key={section.id}>
          <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{ backgroundImage: `url('${section.backgroundImage}')` }}
          >
            <div className="space-y-6 md:space-y-8 text-center max-w-3xl">

              <h1 className="text-4xl md:text-6xl text-white font-semibold">
                {section.title}
              </h1>

              <p className="text-base md:text-lg text-white leading-relaxed">
                {section.description.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <div className="flex justify-center">
                <button
                  className="text-sm md:text-base rounded-md px-7 md:px-9 py-3
                  text-green-950 bg-yellow-300 hover:bg-yellow-400 transition"
                >
                  {section.buttonText}
                </button>
              </div>

            </div>
          </div>
        </section>
      ))}
    </>
 
    </div>
  )
}
