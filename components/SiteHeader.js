"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/ve-clb", label: "Về CLB" },
  { href: "/founder", label: "Founder" },
  { href: "/thanh-vien", label: "Thành viên" },
  { href: "/hoc-tap", label: "Học tập" },
  { href: "/cuoc-thi", label: "Cuộc thi" },
  { href: "/tham-gia", label: "Tham gia", cta: true },
];

function normalize(path) {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

export default function SiteHeader() {
  const pathname = normalize(usePathname() || "/");
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand shine-text" href="/" onClick={() => setOpen(false)}>
        CodeX
      </Link>
      <button
        className="nav-toggle"
        type="button"
        aria-label="Mở menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={link.cta ? "nav-cta" : undefined}
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
