const variants = {
  secondary: "bg-secondary text-secondary-foreground border border-transparent",
  outline: "bg-transparent text-foreground border border-border",
  primary: "bg-primary/10 text-primary border border-primary/20",
};

export function Badge({ children, variant = "secondary", className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs whitespace-nowrap ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
