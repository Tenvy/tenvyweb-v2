import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const Card = ({ children, className = '', ...others }: CardProps) => {
  return (
    <div
      className={`bg-[#1E1E1E] rounded-xl transition-all duration-300 shadow-sm ${className} `}
      {...others}
    >
      {children}
    </div>
  );
};

export default Card;
