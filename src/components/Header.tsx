function Header() {
  return (
    <header className="relative overflow-hidden px-6 pb-10 pt-12 text-center">
      {/* Soft gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-kamen-gold/10 blur-3xl" />

      <div className="relative">
        {/* Small category line */}
        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-kamen-gold/80">
          Pizza • Pasta • Döner
        </p>

        {/* Logo */}
        <div className="mx-auto mt-5 w-48 sm:w-56">
          <img
            src="/logo.png"
            alt="Kamen Pizza"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Decorative line */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-kamen-gold/40" />
          <span className="text-sm text-kamen-gold">✦</span>
          <span className="h-px w-10 bg-kamen-gold/40" />
        </div>

        {/* Tagline */}
        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-kamen-cream/60">
          Frisch zubereitet. Mit Leidenschaft serviert.
        </p>
      </div>
    </header>
  );
}

export default Header;
