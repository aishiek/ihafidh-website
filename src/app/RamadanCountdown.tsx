'use client';

import { useEffect, useState } from 'react';

const RamadanCountdown = () => {
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const checkSize = () => setIsSmall(window.innerWidth < 480);
        checkSize();
        window.addEventListener('resize', checkSize);

        // Estimated Ramadan 2026 start: Feb 18, 2026
        const ramadanDate = new Date('2026-02-18T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = ramadanDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', checkSize);
        };
    }, []);

    return (
        <div style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: isSmall ? '0.2rem' : '0.5rem'
        }}>
            {!isSmall && (
                <span style={{ fontSize: '0.7em', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>Ramadan Countdown</span>
            )}
            <div style={{
                display: 'inline-flex',
                gap: isSmall ? '0.2rem' : '0.4rem',
                alignItems: 'center',
                background: 'rgba(212, 175, 55, 0.1)',
                padding: isSmall ? '0.1rem 0.4rem' : '0.2rem 0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                fontSize: isSmall ? '0.8rem' : '0.9rem',
                fontVariantNumeric: 'tabular-nums',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <span>
                    <span style={{ fontWeight: 800, color: '#FFD700' }}>{timeLeft.days}</span>
                    <span style={{ fontSize: '0.8em', color: '#D4AF37', marginLeft: '1px' }}>d</span>
                </span>
                <span>
                    <span style={{ fontWeight: 800, color: '#FFD700' }}>{timeLeft.hours}</span>
                    <span style={{ fontSize: '0.8em', color: '#D4AF37', marginLeft: '1px' }}>h</span>
                </span>
                <span>
                    <span style={{ fontWeight: 800, color: '#FFD700' }}>{timeLeft.minutes}</span>
                    <span style={{ fontSize: '0.8em', color: '#D4AF37', marginLeft: '1px' }}>m</span>
                </span>
                {(!isSmall) && (
                    <span>
                        <span style={{ fontWeight: 800, color: '#FFD700' }}>{timeLeft.seconds}</span>
                        <span style={{ fontSize: '0.8em', color: '#D4AF37', marginLeft: '1px' }}>s</span>
                    </span>
                )}
            </div>
        </div>
    );
};

export default RamadanCountdown;
