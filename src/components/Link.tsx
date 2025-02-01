import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
}

export function Link({ href, className, activeClassName, ...props }: LinkProps) {
  // In a real app, you'd use your router's logic to determine if the link is active
  const isActive = window.location.pathname === href;
  
  return (
    <a
      href={href}
      className={`${className} ${isActive ? activeClassName : ''}`}
      {...props}
    />
  );
}