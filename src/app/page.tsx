import ProfileClient from "@/components/ProfileClient";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 gap-8 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="absolute top-8 right-8">
        <ThemeSwitch />
      </div>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
        My Team Portfolio
      </h1>
      <ProfileClient />
    </div>
  );
}
