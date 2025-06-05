import React from 'react';

const navLinks = [
  { label: 'Blog', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Talks', href: '#' },
  { label: 'Sponsors', href: '#' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/tuusuario',
    icon: (
      <svg className="w-12 h-12 !w-12 !h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.404 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/tuusuario',
    icon: (
      <svg className="w-12 h-12 !w-12 !h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  { label: 'RSS', href: '#', icon: (
    <svg className="w-12 h-12 !w-12 !h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17.981c0-1.101.898-1.999 1.999-1.999.584 0 1.111.251 1.478.651a1.999 1.999 0 0 1-.001 2.702c-.368.4-1.107.647-1.477.647-1.101 0-1.999-.898-1.999-1.999zm19 1.999a1.999 1.999 0 0 1-1.999 1.999h-14c-1.101 0-1.999-.898-1.999-1.999v-14c0-1.101.898-1.999 1.999-1.999h14c1.101 0 1.999.898 1.999 1.999v14zm-4.268-7.18c-.709.405-1.081.629-1.081 1.131 0 .45.411.814 1.144.814 2.133 0 3.878 1.745 3.878 3.878 0 2.134-1.745 3.879-3.878 3.879s-3.878-1.745-3.878-3.879v-.134c0-.806.651-1.458 1.456-1.458.805 0 1.456.652 1.456 1.458v.134c0 1.338 1.084 2.423 2.422 2.423s2.422-1.085 2.422-2.423-1.084-2.422-2.422-2.422c-.69 0-1.348.296-1.804.792-.409-.616-.705-1.292-.886-1.979-.27-.974.018-2.058.856-2.618l.568-.379c.56-.374 1.271-.418 1.864-.115.461.236.947.352 1.424.352.826 0 1.58-.469 1.941-1.205l.087-.175c.463-.927-.137-2.04-.99-2.479-.853-.439-1.873-.168-2.336.759l-.087.175c-.341.682-1.037 1.093-1.795 1.093-.166 0-.335-.022-.505-.053-.094-.018-.186-.04-.282-.059-1.547-.31-3.012.101-3.892 1.06l-.752.801-.362-.254-.745-.525c-1.108-.78-2.524-.793-3.659-.019l-.448.307c-.827.56-1.136 1.586-.74 2.512.405.927 1.365 1.475 2.328 1.475.418 0 .839-.103 1.205-.307l.472-.254c.338-.181.752-.257 1.15-.206.889.11 1.704.514 2.323 1.132.454-.601.842-1.264 1.178-1.943zm-6.962 4.928c0-.805.652-1.457 1.457-1.457.805 0 1.457.652 1.457 1.457s-.652 1.457-1.457 1.457-1.457-.652-1.457-1.457z"/>
    </svg>
  )},
  {
    label: 'Email',
    href: 'mailto:tu@email.com',
    icon: (
      <svg className="w-12 h-12 !w-12 !h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  { label: 'Dark Mode', icon: (
    <svg className="w-12 h-12 !w-12 !h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ) },
];

const utilityIcons = [
  { label: 'Mic', href: '#', icon: (
    <svg className="w-8 h-8 !w-8 !h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ) },
  { label: 'Camera', href: '#', icon: (
    <svg className="w-8 h-8 !w-8 !h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ) },
  { label: 'Scissors', href: '#', icon: (
    <svg className="w-8 h-8 !w-8 !h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121a3 3 0 10-4.242 4.243m4.242-4.243a3 3 0 114.243 4.243m-4.243-4.243L9.88 9.88m-.091-.091a3 3 0 10-4.242-4.243m4.242 4.243a3 3 0 114.243-4.243m-4.243 4.243L14.12 14.12" />
    </svg>
  ) },
  { label: 'Butterfly', href: '#', icon: (
    <svg className="w-8 h-8 !w-8 !h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.88 9.88a3 3 0 104.242 0M16 16v.01M6 16v.01" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ) },
];

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-4 bg-white/80 dark:bg-primary-900/80 backdrop-blur-sm fixed top-0 z-50 border-b border-primary-200 dark:border-primary-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 md:gap-4 !flex !flex-row">
        {/* Logo minimalista */}
        <div className="flex items-center gap-1 min-w-fit">
          <svg className="w-10 h-10 !w-10 !h-10" fill="none" stroke="currentColor" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" strokeWidth="2" />
            <path d="M10 20 Q16 10 22 20" strokeWidth="2" />
          </svg>
        </div>

        {/* Links de navegación (oculto en móvil) */}
        <ul className="hidden md:flex gap-4 items-center flex-1 justify-center min-w-0">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-primary-700 dark:text-primary-200 hover:text-accent dark:hover:text-accent-light font-medium transition-colors duration-200 px-2 py-1"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Iconos de utilidad y sociales */}
        <div className="flex items-center gap-6 min-w-fit">
          {utilityIcons.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 p-0.5 border border-primary-200 dark:border-primary-700 rounded-full bg-transparent text-primary-700 dark:text-primary-200 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all duration-200 !w-12 !h-12"
              aria-label={label}
            >
              {icon}
            </a>
          ))}

          {socialLinks.map(({ label, href, icon }) => (
             label !== 'Dark Mode' ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 p-0.5 border border-primary-200 dark:border-primary-700 rounded-full bg-transparent text-primary-700 dark:text-primary-200 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all duration-200 !w-12 !h-12"
              aria-label={label}
            >
              {icon}
            </a>
             ) : null // Dark Mode handled separately
          ))}

          {/* Modo oscuro */}
          <button
            className="inline-flex items-center justify-center w-12 h-12 p-0.5 border border-primary-200 dark:border-primary-700 rounded-full bg-transparent text-primary-700 dark:text-primary-200 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all duration-200 !w-12 !h-12"
            aria-label="Toggle dark mode"
            onClick={() => {
              document.documentElement.classList.toggle('dark');
            }}
          >
            {socialLinks.find(link => link.label === 'Dark Mode')?.icon}
          </button>
        </div>

        {/* Botón de hamburguesa (visible en móvil) */}
        <div className="md:hidden">
          {/* Implementar botón de hamburguesa aquí */}
        </div>

      </div>
    </nav>
  );
} 