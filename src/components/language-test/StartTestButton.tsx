type Props = {
	onStart: () => void;
};

export default function StartTestButton({ onStart }: Props) {
  return (
    <button
      className="mb-6 px-4 py-1 text-amber-950 bg-[#f3c569] rounded shadow hover:shadow-md transition-shadow cursor-pointer"
      onClick={onStart}>
      Starta testet
    </button>
  );
}
