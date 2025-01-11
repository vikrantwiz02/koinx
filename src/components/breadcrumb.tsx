import Link from 'next/link'

interface BreadcrumbProps {
  items: {
    label: string
    href: string
    isActive?: boolean
  }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[16px]">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <span className="mx-2 text-[#0F1629]">{'>>'}</span>}
          <Link
            href={item.href}
            className={`${
              item.isActive ? 'text-[#0141CF]' : 'text-[#0F1629]'
            } hover:text-[#0141CF] transition-colors`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

