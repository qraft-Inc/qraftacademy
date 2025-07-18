import { cn } from '@/lib/utils';

const navItems = ['QRAFT', 'RESEARCH', 'PROGRAMS', 'COURSES', 'ABOUT'];

export function Navigation() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-24 items-center justify-between">
          {navItems.map((item, index) => (
            <a
              className={cn(
                "text-sm tracking-wider font-medium text-white/90 hover:text-white transition-colors relative group",
                index === 0 && "text-lg font-bold"
              )}
              href={`/${item.toLowerCase()}`}
              key={item}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}