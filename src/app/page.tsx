import Logo from "components/logos/Logo";
import LogoType from "components/logos/logoType";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center gap-[3rem] flex-col">
      <LogoType className="w-[60vw] h-auto brightness-0 invert mt-[5rem]" />
    </div>
  );
}
