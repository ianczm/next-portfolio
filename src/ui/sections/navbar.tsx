import Button from "../components/button";
import IanczmLogo from "../components/logo";

export default function NavBar() {
  return (
    <nav className="absolute left-0 top-0 flex w-full items-center justify-between px-60 py-20">
      <a href="/">
        <IanczmLogo />
      </a>
      <div className="flex items-center gap-20">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Projects</a>
        <Button>Contact</Button>
      </div>
    </nav>
  );
}
