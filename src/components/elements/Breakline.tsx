type BreaklineProps = {
    className?: string;
    [propName: string]: string | undefined;
  };
  
  const Breakline = ({ className = '', ...others }: BreaklineProps) => {
    return (
      <div
        className={`border-t border-neutral-700 my-4 ${className}`}
        data-testid='breakline'
        {...others}
      ></div>
    );
  };
  
  export default Breakline;