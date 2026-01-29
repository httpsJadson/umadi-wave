export default function SuccessJovem({ onClose }) {
  return (
    <div className="py-10 text-center">
      <div className="mx-auto h-20 w-20 rounded-full bg-green-500 flex items-center justify-center text-white text-4xl shadow-lg">
        ✓
      </div>

      <h2 className="mt-6 text-3xl font-bold text-gray-800">
        Inscrição enviada!
      </h2>

      <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">
        Obrigado por se inscrever. A paz do Senhor Jesus!  
        Estamos felizes com a sua presença na WaveCon.
      </p>

      <button
        onClick={onClose}
        className="mt-8 px-8 py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition font-semibold"
      >
        Fechar
      </button>
    </div>
  );
}
