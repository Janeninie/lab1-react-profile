"use client";
import React from "react";
import { Heart } from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, bio }) => {
  const [likes, setLikes] = React.useState(0);

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-6 border border-zinc-200 hover:shadow-xl transition-shadow duration-300 relative group">
      <button
        onClick={() => setLikes((prev) => prev + 1)}
        className="absolute top-4 right-4 flex items-center gap-1.5 p-2 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer group/btn"
        aria-label="Like"
      >
        <Heart
          className={`w-5 h-5 transition-colors duration-300 ${
            likes > 0
              ? "fill-red-500 stroke-red-500"
              : "stroke-zinc-400 group-hover/btn:stroke-red-500"
          }`}
        />
        {likes > 0 && (
          <span className="text-sm font-medium text-zinc-600">{likes}</span>
        )}
      </button>
      <div className="font-bold text-xl mb-2 text-zinc-900">{name}</div>
      <div className="text-sm font-semibold text-indigo-600 mb-3 uppercase tracking-wide">
        {role}
      </div>
      <p className="text-zinc-700 text-base leading-relaxed">{bio}</p>
    </div>
  );
};

export default ProfileCard;
