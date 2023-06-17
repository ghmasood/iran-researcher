import Logo from "components/logos/Logo";
import LogoType from "components/logos/logoType";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <LogoType className="w-[60vw] brightness-0 invert" />
      <span>DEV SERVER</span>
    </div>
  );
}
