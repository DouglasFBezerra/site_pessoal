import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

// ─── Button ──────────────────────────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a' | 'link';
  href?: string;
  to?: string;
  external?: boolean;
  children: ReactNode;
}

const buttonVariants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  href,
  to,
  external,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`glass-card ${hover ? 'hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300 cursor-default' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────
interface BadgeProps {
  children: ReactNode;
  variant?: 'blue' | 'cyan' | 'green' | 'yellow' | 'slate';
  className?: string;
}

const badgeVariants = {
  blue: 'badge-blue',
  cyan: 'badge-cyan',
  green: 'badge-green',
  yellow: 'badge-yellow',
  slate: 'badge bg-slate-800 text-slate-300 border border-slate-700',
};

export function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <span className={`${badgeVariants[variant]} ${className}`}>{children}</span>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className = '', dark = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${dark ? 'bg-brand-navy' : 'bg-brand-black'} ${className}`}
    >
      <div className="section-container">{children}</div>
    </section>
  );
}

// ─── SectionHeader ────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  center = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${center ? 'text-center' : ''} ${className}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}

// ─── TechTag ─────────────────────────────────────────────────────────────────
export function TechTag({ children }: { children: ReactNode }) {
  return <span className="tech-tag">{children}</span>;
}
