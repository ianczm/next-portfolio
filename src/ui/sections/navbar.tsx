import Button from "../components/button";
import IanczmLogo from "../components/logo";
import NavLink from "../components/nav-link";

export default function NavBar() {
  return (
    <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-60 py-20">
      <a href="/">
        <IanczmLogo />
      </a>
      <div className="flex items-center gap-20">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <Button intent="primary">Contact</Button>
      </div>
    </nav>
  );
}
