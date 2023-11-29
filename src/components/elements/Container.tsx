import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className='lg:w-4/5 max-w-[854px] transition-all duration-300'>
            <div className={"mt-20 mb-10 lg:mt-0 p-8"}>
                {children}
            </div>
        </div>
    );
};

export default Container;