import ButtonObreiro from "@/components/buttons/ButtonObreiro";
import ButtonCristao from "@/components/buttons/ButtonCristao";
import FloatingBadge from "@/components/animations/FloatingBadge";


export default function Home() {
  return (
    <>
      <main className="px-10">
        <div className="max-w-3xl mx-auto pt-10 text-center">
          <h1 className="hero-title text-cyan-600 text-5xl md:text-6xl font-extrabold tracking-tight">
            Bem-vindo à
          </h1>

          <h2 className="hero-title text-black text-5xl md:text-5xl font-extrabold tracking-tight">
            WaveCon
          </h2>

          <h2 className="hero-subtitle mt-10 text-base lg:text-2xl text-gray-700 leading-relaxed">
            Seja muito bem-vindo à Umadi. Este é um espaço preparado com carinho para você se inscrever, se conectar e caminhar conosco.
            Estamos ansiosos pela sua presença e por tudo o que Deus fará através deste encontro.
          </h2>

          <h3 className="mt-16 text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight question-appear">
            Você é <span className="text-cyan-600">Obreiro</span> ou{" "}
            <span className="text-cyan-600">Jovem</span>?
          </h3>

          <div className="flex justify-end mt-20 mr-56 gap-20">
            <ButtonObreiro className="btn-ripple btn-wave btn-jump-up" />
            <ButtonCristao />
          </div>

          <div className="absolute left-10 top-32 floaty">
            <FloatingBadge />
          </div>
        </div>
      </main>

      <h3
        className="
          fixed bottom-10 left-10 max-w-xs
          text-gray-800 text-6xl font-medium leading-snug
          pointer-events-none wavecon-appear
        "
      >
        #WaveCon
      </h3>
    </>
  );
}
