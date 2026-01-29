import ButtonContato from "@/components/buttons/ButtonContato";

export default function Navbar() {
  return (
    <nav className="nav-appear nav-delay w-full px-8 py-3 flex items-center justify-between bg-transparent">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-gray-900">
          <span className="text-black"> WaveCon </span>
        </span>
      </div>

      <ul className="hidden md:flex gap-40 text-black font-medium">
        <li className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-cyan-500 transition btn-ripple btn-wave btn-jump-up">
          João 3:16
        </li>
        <li className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-cyan-500 transition btn-ripple btn-wave btn-jump-up">
          Salmos 116
        </li>
        <li className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-cyan-500 transition btn-ripple btn-wave btn-jump-up">
          Lucas 23:33
        </li>
        <li className="px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-cyan-500 transition btn-ripple btn-wave btn-jump-up">
          Filipenses 4:13
        </li>
      </ul>

      <ButtonContato />
    </nav>
  );
}
