import { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "../../utils/cn.ts";

const styles = {
  activeLink: "text-accent-500 font-bold",
  link: "flex items-center gap-3 [&_svg]:w-6 [&_svg]:h-6 rounded-sm focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-accent-700 focus-visible:outline-none hover:text-accent-100",
};

type Props<T extends ElementType = "a"> = {
  ActiveIcon?: ElementType;
  DefaultIcon: ElementType;
  as?: T;
  disabled?: boolean;
  iconTrigger?: boolean | string;
  isActive?: boolean;
} & ComponentPropsWithoutRef<T>;

export const LinkWithIcon = <T extends ElementType = "a">({
  ActiveIcon,
  DefaultIcon,
  as,
  children,
  className,
  disabled,
  href,
  isActive = false,
  ...rest
}: Props<T>) => {
  const Component = as || "a";

  return (
    <Component
      href={href}
      {...rest}
      aria-disabled={disabled}
      className={cn(
        className,
        styles.link,
        isActive && styles.activeLink,
        disabled && "pointer-events-none text-dark-100",
      )}
      tabIndex={disabled ? -1 : undefined}
    >
      {isActive && ActiveIcon ? <ActiveIcon /> : <DefaultIcon />}
      {children}
    </Component>
  );
};
