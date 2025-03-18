import ToggleDark from "@/components/ToggleDark";
import Title from "@/components/Title";
import Menu from "@/components/Menu";
import Socials from "@/components/Socials";
import Motto from "@/components/Motto";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      <ToggleDark />

      <div className="w-full max-w-3xl px-8 text-center">
        <Title />
        <Motto />
        <Menu />
        <Socials />
      </div>
    </div>
  );
}
