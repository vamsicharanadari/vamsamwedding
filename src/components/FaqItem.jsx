function FaqItem({ item }) {
  return (
    <details className="rounded-xl border border-gold-300/40 bg-white p-4 open:bg-ivory-100">
      <summary className="cursor-pointer list-none pr-4 font-semibold text-maroon-700">{item.question}</summary>
      <p className="mt-3 text-sm text-maroon-800/85">{item.answer}</p>
    </details>
  );
}

export default FaqItem;
