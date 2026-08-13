function Footer() {
  return (
    <footer className="mt-16 border-t border-kamen-gold/20 px-5 pb-28 pt-10 text-center">
      <div className="mx-auto max-w-md">
        {/* Brand */}
        <h2 className="font-outfit text-xl font-semibold uppercase tracking-[0.2em] text-kamen-gold">
          Kamen Pizza
        </h2>

        <p className="mt-2 text-sm text-kamen-cream/60">Pizza, Pasta & mehr</p>

        {/* Divider */}
        <div className="mx-auto my-6 h-px w-16 bg-kamen-gold/40" />

        {/* Copyright */}
        <p className="text-xs text-kamen-cream/50">
          © {new Date().getFullYear()} Kamen Pizza
        </p>

        {/* Icons8 */}
        <p className="mt-2 text-[10px] text-kamen-cream/40">
          Icons by{" "}
          <a
            href="https://icons8.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kamen-gold/70 transition-colors hover:text-kamen-gold"
          >
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
