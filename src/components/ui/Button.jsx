const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary/10",
  ghost: "bg-transparent text-foreground hover:bg-accent",
};

const sizes = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-9 px-3 text-sm",
  lg: "h-12 px-8 text-base",
  icon: "h-10 w-10",
};

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  return (
    <button
      data-glow
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
