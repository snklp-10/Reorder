import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/Reorder_Asset_1.png";

const navbarComponents = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
];

const Header = () => {
  return (
    <header className="w-full h-[100px] bg-background p-6 flex justify-center items-center">
      <div className="w-full h-full xl:max-w-[50%] flex justify-between items-center">
        <Link href="/" className="flex space-x-2">
          <Image src={logo} width={30} height={30} alt="logo" />
          <span className="text-2xl font-bold">Reorder</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-10">
            {navbarComponents.map((item, index = Math.random()) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <Link href={item.href}>
                    <span>{item.title}</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex">
          <Link href="/homePage">
            <Button variant="outline" className="bg-yellow-200">
              <span className="font-bold">Start using Reorder</span>
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
