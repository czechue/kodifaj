import React from 'react';

interface BadgeProps {
  children: string;
}

export default function SolutionBadgeComponent({ children }: BadgeProps) {
  return (
    <span className=" flex-initial block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded">
      #{children}
    </span>
  );
}
