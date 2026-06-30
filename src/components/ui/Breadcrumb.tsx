export default function Breadcrumb({ items }) {
  return (
    <nav className="flex gap-2 text-sm text-white/60 mb-6">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 items-center">
          {i > 0 && <span>/</span>}
          <a href={item.href} className="hover:text-white">{item.label}</a>
        </div>
      ))}
    </nav>
  );
}