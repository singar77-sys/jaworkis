interface TapeLabelProps {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
}

export function TapeLabel({ children, rotate = -1.5, className = "" }: TapeLabelProps) {
  return (
    <span
      className={`tape ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
