export function Card({ children, className = "" }) {
  return (
    <div
      data-glow
      className={`relative z-10 bg-card text-card-foreground border border-border rounded-xl shadow-sm transition-all duration-300 hover:border-primary/20 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`tracking-tight ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
