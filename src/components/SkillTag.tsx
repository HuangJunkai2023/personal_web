export default function SkillTag({ label }: { label: string }) {
  return (
    <span className="px-3 py-1.5 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
      {label}
    </span>
  );
}
