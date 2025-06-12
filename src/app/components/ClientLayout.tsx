"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar1";
import { ReactNode, useEffect } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current Path:", pathname); // 🔍 check what route it really is
  }, [pathname]);

  const showNavbar = pathname === "/login" || pathname === "/signup";

  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
}
