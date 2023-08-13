import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva("px-6 py-3 rounded-xl duration-300", {
  variants: {
    color: {
      green: "bg-accant1 text-light/90 hover:bg-accant1/90",
      dark: "bg-dark text-light hover:bg-dark/90",
      light: "bg-light text-dark hover:bg-light/90",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  target?: string;
  placeholder: string;
}
const Button: React.FC<ButtonProps> = ({
  href,
  target,
  placeholder,
  color,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(buttonVariants({ color }))}
    >
      {placeholder}
    </Link>
  );
};

export default Button;
