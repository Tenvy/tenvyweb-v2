import React from 'react';

interface MobileMenuButtonProps {
    expandMenu: boolean;
    setExpandMenu: (expand: boolean) => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
    expandMenu,
    setExpandMenu,
}) => {
    const handleMenuToggle = () => {
        setExpandMenu(!expandMenu);
    };

    const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];

    return (
        <div
            className="flex lg:hidden"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '21px',
                width: '26px',
                cursor: 'pointer',
            }}
            onClick={handleMenuToggle}
        >
            {menuSpanData.map((item) => (
                <span
                    key={item.index}
                    className={`${item.index === 2 && expandMenu ? 'w-0 ' : ''}${expandMenu ? 'rotate--45 ' : ''
                        }bg-neutral-950 dark:bg-neutral-100`}
                    style={{
                        width: '100%',
                        height: '3px',
                        transition: 'all 0.5s ease',
                        borderRadius: '10px',
                        ...(expandMenu &&
                            (item.index === 1 || item.index === 3) && {
                            transformOrigin: 'left',
                        }),
                    }}
                />
            ))}
        </div>
    );
};

export default MobileMenuButton;
