import React, { useEffect, useState } from 'react';

// Använder samma bild som huvudlogotypen för exakt matchning
const FLOWER_IMAGE_URL = "https://customer-assets.emergentagent.com/job_99647620-aa0d-48cd-947c-c21a78f050c5/artifacts/ekb3cgx0_a2324df2-849a-44a3-b779-1569a30de3ac.png";

const ParallaxFlowers = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Blommor i olika positioner och storlekar
    const flowers = [
        // Vänster sida
        { id: 1, top: '5%', left: '2%', size: 90, speed: 0.02, delay: 0, rotation: -15 },
        { id: 2, top: '28%', left: '6%', size: 60, speed: 0.03, delay: 0.5, rotation: 10 },
        { id: 3, top: '55%', left: '1%', size: 75, speed: 0.015, delay: 1, rotation: -8 },
        { id: 4, top: '78%', left: '8%', size: 55, speed: 0.025, delay: 1.5, rotation: 20 },

        // Höger sida
        { id: 5, top: '8%', right: '3%', size: 85, speed: 0.025, delay: 0.3, rotation: 12 },
        { id: 6, top: '35%', right: '1%', size: 65, speed: 0.02, delay: 0.8, rotation: -18 },
        { id: 7, top: '62%', right: '5%', size: 80, speed: 0.018, delay: 1.2, rotation: 5 },
        { id: 8, top: '88%', right: '2%', size: 50, speed: 0.03, delay: 1.8, rotation: -10 },

        // Små accenter
        { id: 9, top: '18%', left: '12%', size: 45, speed: 0.035, delay: 0.2, rotation: 25 },
        { id: 10, top: '48%', right: '12%', size: 40, speed: 0.04, delay: 0.6, rotation: -22 },
        { id: 11, top: '72%', left: '15%', size: 48, speed: 0.028, delay: 1.4, rotation: 15 },
        { id: 12, top: '22%', right: '10%', size: 52, speed: 0.022, delay: 1.1, rotation: -5 },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Subtil gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-sd-navy-50/20 via-transparent to-sd-navy/30" />

            {/* Blommor - använder samma bild som huvudlogotypen */}
            {flowers.map((flower) => {
                const translateY = scrollY * flower.speed;

                return (
                    <div
                        key={flower.id}
                        className="absolute"
                        style={{
                            top: flower.top,
                            left: flower.left,
                            right: flower.right,
                            width: flower.size,
                            height: flower.size,
                            transform: `translateY(${-translateY}px) rotate(${flower.rotation}deg)`,
                            opacity: 0.12,
                            animation: `float-slow ${6 + flower.delay * 2}s ease-in-out infinite`,
                            animationDelay: `${flower.delay}s`,
                        }}
                    >
                        <img
                            src={FLOWER_IMAGE_URL}
                            alt=""
                            className="w-full h-full object-contain"
                            loading="lazy"
                        />
                    </div>
                );
            })}

            {/* Subtila ljusglöd-accenter */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-sd-blue/5 rounded-full blur-3xl animate-pulse-slow"
                style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sd-blue/5 rounded-full blur-3xl animate-pulse-slow"
                style={{
                    transform: `translateY(${-scrollY * 0.03}px)`,
                    animationDelay: '2s'
                }}
            />
        </div>
    );
};

export default ParallaxFlowers;
