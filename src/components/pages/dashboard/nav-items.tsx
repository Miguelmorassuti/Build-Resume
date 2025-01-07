"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NewspaperIcon, SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Currículos",
      icon: NewspaperIcon,
      path: "/dashboard/resumes",
    },
    {
      label: "Configurações de conta",
      icon: SquareUser,
      path: "dashboard/account",
    },
  ];

  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        //startswith verifica se o pathname começa com o item.path
        const isActive = pathname.startsWith(item.path);

        return (
          <Link key={item.path} href={item.path}>
            <Button
              variant="ghost"
              className={cn(
                "w-full gap-2 justify-start",
                isActive && "bg-accent"
              )}
            >
              <item.icon size={16} />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};