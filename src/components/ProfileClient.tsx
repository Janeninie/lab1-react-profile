"use client";
import React from "react";
import ProfileCard from "./ProfileCard";

export default function ProfileClient() {
  const [data, setData] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("https://api.github.com/users/Janeninie")
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText || "Failed to fetch");
        return res.json();
      })
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch((err) => {
        if (mounted) setError(err.message || "Failed to load");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="max-w-lg w-64 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-zinc-900 p-6 border border-zinc-200 dark:border-zinc-800 animate-pulse">
        <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded mb-3 w-3/4"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded mb-2 w-1/2"></div>
        <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded mb-4 w-full"></div>
        <div className="flex gap-2 mt-4">
          <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded w-24"></div>
          <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded flex-1"></div>
        </div>
      </div>
    );
  }

  if (error) return <div className="text-red-600">Error: {error}</div>;

  const name = data?.name || data?.login || "Unknown";
  const bio = data?.bio || "No bio available";

  return <ProfileCard name={name} role="Fullstack Developer" bio={bio} />;
}
