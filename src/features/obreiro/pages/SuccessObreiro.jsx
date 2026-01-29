export default function SuccessObreiro({ onClose }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      
      
      <div className="w-28 h-28 rounded-full bg-green-500 flex items-center justify-center mb-8 animate-bounce">
        <svg
          className="w-14 h-14 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Inscrição enviada!
      </h2>

      <p className="text-lg text-gray-600 max-w-md">
        Obrigado por se inscrever.  
        <br />
        <span className="font-medium">
          A paz do Senhor Jesus!
        </span>
      </p>

      
      <button
        onClick={onClose}
        className="mt-10 px-10 py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition font-semibold"
      >
        Fechar
      </button>
    </div>
  );
}
