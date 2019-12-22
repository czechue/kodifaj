export default function SolutionLinkComponent({
  children,
  url,
}: SolutionLinkProps) {
  return (
    <a
      className="block text-violet_primary hover:text-gray-800 underline font-semibold"
      href={url}
    >
      {children}
    </a>
  );
}

interface SolutionLinkProps {
  children: string;
  url: string;
}
