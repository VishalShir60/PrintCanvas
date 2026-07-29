function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition duration-200 focus:outline-none focus:ring-4 focus:ring-orange-100 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-orange-500 text-white shadow-lg shadow-orange-100 hover:-translate-y-0.5 hover:bg-orange-600",
    secondary:
      "border border-gray-300 bg-white text-gray-950 hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-500",
    dark:
      "bg-gray-950 text-white hover:-translate-y-0.5 hover:bg-gray-800",
    ghost:
      "bg-transparent text-gray-700 hover:bg-orange-50 hover:text-orange-500",
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-sm",
    large: "px-7 py-4 text-base",
    icon: "h-11 w-11 p-0",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;