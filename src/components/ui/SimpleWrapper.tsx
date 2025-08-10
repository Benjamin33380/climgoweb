'use client';

interface SimpleWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SimpleWrapper({ children, className = '' }: SimpleWrapperProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
