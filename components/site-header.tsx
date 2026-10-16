const links = [
  { href: "#flow", label: "流程" },
  { href: "#plans", label: "方案" },
  { href: "#faq", label: "常見問題" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top">
        StudioFlow AI
      </a>
      <nav className="nav-wide" aria-label="頁面">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="button" href="#demo">
          預約免費示範
        </a>
      </nav>
      <details className="nav-compact">
        <summary>目錄</summary>
        <nav aria-label="頁面">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="button" href="#demo">
            預約免費示範
          </a>
        </nav>
      </details>
    </header>
  );
}
