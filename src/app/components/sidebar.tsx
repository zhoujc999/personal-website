"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="h-full p-16">
      <div className="h-16 w-32 py-8">
        <Link href="#">
          <Image
            className="inline-block"
            src="./next.svg"
            alt="Logo"
            width={96}
            height={48}
          />
        </Link>
      </div>
      <div className="py-8">
        <ol className="flex flex-col space-y-4">
          {[
            ["Home", "/"],
            ["Experience", "/experience"],
            ["Portfolio", "/portfolio"],
            ["Blog", "/blog"],
          ].map(([title, url]) => (
            <li>
              <Link
                className={`transition hover:text-[#978d94] ${
                  pathname === url ? "font-semibold" : ""
                }`}
                href={url}
              >
                {title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
