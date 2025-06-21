type Props = {
	onRestart: () => void;
};

export default function RestartTestButton({ onRestart }: Props) {
  return (
    <button
      onClick={onRestart}
      className="px-4 py-1 text-amber-950 bg-[#f3c569] rounded shadow hover:shadow-md transition-shadow cursor-pointer">
      Börja om
    </button>
  );
}