import React from 'react';

export default function SectionDivider({ variant = 'default' }: { variant?: 'default' | 'terracotta' | 'forest' }) {
  const color = variant === 'terracotta' ? '#A0522D' : variant === 'forest' ? '#556B2F' : '#A0522D';
  const opacity = 0.08;

  return (
    <div className="flex justify-center py-2">
      <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 10 Q25 2 50 10 Q75 18 100 10 Q125 2 150 10 Q175 18 200 10"
          stroke={color}
          strokeOpacity={opacity}
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="100" cy="10" r="2" fill={color} fillOpacity={opacity} />
        <circle cx="50" cy="10" r="1.5" fill={color} fillOpacity={opacity * 0.7} />
        <circle cx="150" cy="10" r="1.5" fill={color} fillOpacity={opacity * 0.7} />
      </svg>
    </div>
  );
}
