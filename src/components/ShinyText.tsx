import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <button
            className={`text-[#b5b5b5a4] border-2 border-[#dbe3f1a4] py-2 px-4 rounded-3xl text-xl bg-clip-text inline-block 
        ${disabled ? '' : 'animate-shine'} ${className} 
        transition-all duration-300 hover:bg-[#ffffff1a] hover:backdrop-blur-lg 
        hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500`}
            style={{
                backgroundImage:
                    'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </button>
    );
};

export default ShinyText;
