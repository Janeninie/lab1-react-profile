import ProfileCard from "@/components/ProfileCard";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/Janeninie");
  const data = await res.json();

  const name = data.name || data.login;
  const bio = data.bio || "No bio available";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center  p-8 gap-8">
      <h1 className="text-3xl font-bold text-zinc-900">Team Member</h1>
      <ProfileCard name={name} role="Fullstack Developer" bio={bio} />
    </div>
  );
}
