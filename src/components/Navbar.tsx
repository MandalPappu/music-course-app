'use client'

import { useState } from "react"
import { cn } from "@/utils/cn";
import { Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
import { HoveredLink } from "./ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our courses">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/courses">All courses</HoveredLink>
          <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
          <HoveredLink href="/courses">Advanced Composition</HoveredLink>
          <HoveredLink href="/courses">Song Writing</HoveredLink>
          <HoveredLink href="/courses">Music production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact-us"></MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar