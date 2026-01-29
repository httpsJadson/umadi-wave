import { useState } from "react";
import ModalObreiro from "@/features/obreiro/components/ModalObreiro";


export default function ButtonObreiro() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-3 bg-black text-white text-lg rounded-full
                   hover:bg-cyan-500 transition
                   btn-ripple btn-wave btn-appear btn-delay-2"
      >
        Obreiro
      </button>

      <ModalObreiro open={open} onClose={() => setOpen(false)} />
    </>
  );
}
