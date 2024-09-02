import InlineLink from "../components/inline-link";

export default function Footer() {
  return (
    <div className="relative">
      <div className="absolute -z-10 h-full w-full">
        <div className="absolute left-1/3 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D17E16]/20 blur-[200px]"></div>
        <div className="absolute left-2/3 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FB8842]/20 blur-[200px]"></div>
      </div>
      <div className="flex flex-col gap-32 px-60 pb-40 pt-60">
        <div className="flex gap-24">
          <div className="flex max-w-[810px] flex-col gap-10">
            <h2 className="text-gradient font-bold uppercase tracking-widest text-transparent">
              Get In Touch
            </h2>
            <h1 className="text-gradient text-6xl font-bold leading-tight tracking-tight">
              Have an interesting opportunity to share?
            </h1>
            <a href="/" className="text-gradient text-5xl font-bold">
              <span className="text-transparent underline">
                Let's talk about it!
              </span>
            </a>
          </div>
          <div className="flex w-[500px] gap-10">
            <div className="flex w-full flex-col gap-10">
              <h2 className="text-gradient font-bold uppercase tracking-widest text-transparent">
                Explore
              </h2>
              <ul className="flex flex-col gap-5">
                <li>
                  <a href="" className="text-2xl font-bold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="text-2xl font-bold">
                    About
                  </a>
                </li>
                <li>
                  <a href="" className="text-2xl font-bold">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col gap-10">
              <h2 className="text-gradient text-xl font-bold uppercase tracking-widest text-transparent">
                Connect
              </h2>
              <ul className="flex flex-col gap-5">
                <li>
                  <a href="" className="text-2xl font-bold">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="" className="text-2xl font-bold">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="" className="text-2xl font-bold">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="" className="text-2xl font-bold">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex gap-6">
            <a href="" className="text-gradient font-bold">
              <span className="text-transparent">© 2024</span> Ian Chong.
            </a>
            <a href="" className="font-bold">
              Privacy Policy.
            </a>
          </div>
          <div className="w-[500px]">
            <p>
              Designed in <InlineLink>Figma.</InlineLink> Built with{" "}
              <InlineLink>React</InlineLink> and{" "}
              <InlineLink>Next.js</InlineLink>.
            </p>
            <p>
              Styled with <InlineLink>Tailwind CSS</InlineLink> and lots of{" "}
              <InlineLink>love</InlineLink>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
