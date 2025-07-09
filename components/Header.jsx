import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-2 text-white">
      <div className="container mx-auto flex justify-between item-center">
        {/* {logo} */}
        <Link href="/">
          <h3 className="text-4xl mt-4 font-semibold">
            Abdelmalek <span className="text-accent">.</span>
          </h3>
        </Link>

        {/* {DESKTOP NAV & here me button } */}
        <div className="hidden xl:flex xl:mt-4 items-center gap-8 ">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* {mobile nav} */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
