interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex gap-2 text-sm text-white/60 mb-6">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}

          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}