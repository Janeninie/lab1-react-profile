"use client";
import React from "react";
import { Heart, Plus, X } from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  skills?: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  bio,
  skills = ["React", "Next.js", "Tailwind CSS", "TypeScript"],
}) => {
  const [likes, setLikes] = React.useState(0);
  const [skillInput, setSkillInput] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentSkills, setCurrentSkills] = React.useState<string[]>(skills);

  const addSkill = () => {
    if (skillInput.trim() && !currentSkills.includes(skillInput.trim())) {
      setCurrentSkills((prev) => [...prev, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setCurrentSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  const filteredSkills = currentSkills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-sm w-96 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-zinc-900 p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow duration-300 relative group">
      <button
        onClick={() => setLikes((prev) => prev + 1)}
        className="absolute top-4 right-4 flex items-center gap-1.5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer group/btn"
        aria-label="Like"
      >
        <Heart
          className={`w-5 h-5 transition-colors duration-300 ${
            likes > 0
              ? "fill-red-500 stroke-red-500"
              : "stroke-zinc-400 dark:stroke-zinc-500 group-hover/btn:stroke-red-500"
          }`}
        />
        {likes > 0 && (
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {likes}
          </span>
        )}
      </button>
      <div className="font-bold text-xl mb-2 text-zinc-900 dark:text-white">
        {name}
      </div>
      <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-wide">
        {role}
      </div>
      <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed mb-4">
        {bio}
      </p>

      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search skills..."
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-transparent dark:text-white mb-3"
        />
        {filteredSkills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {filteredSkills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="hover:text-indigo-600 dark:hover:text-indigo-100 transition-colors"
                  aria-label={`Remove ${skill}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        ) : (
          searchTerm && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
              No skills found matching "{searchTerm}"
            </p>
          )
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="Add a skill"
          className="flex-1 px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-transparent dark:text-white"
        />
        <button
          onClick={addSkill}
          className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-1"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
