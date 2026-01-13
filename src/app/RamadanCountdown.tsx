'use client';

import { useEffect, useState } from 'react';

const RamadanCountdown = () => {
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Estimated Ramadan 2026 start: Feb 18, 2026 (Adjust based on moon sighting, strictly for approx usage)
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

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display: 'inline-flex',
            gap: '0.8rem',
            alignItems: 'center',
            background: 'rgba(212, 175, 55, 0.1)',
            padding: '0.5rem 1.2rem',
            borderRadius: '12px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            fontSize: '1.1em',
            fontVariantNumeric: 'tabular-nums',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
            <span>
                <span style={{ fontWeight: 800, color: '#FFD700', fontSize: '1.2em' }}>{timeLeft.days}</span>
                <span style={{ fontSize: '0.8em', color: '#D4AF37', marginLeft: '2px' }}>d</span>
            </span>
            <span>
                <span style={{ fontWeight: 800, color: '#FFD700', fontSize: '1.2em' }}>{timeLeft.hours}</span>
                <span style={{ fontSize: '0.8em', color: '#D4AF37', marginLeft: '2px' }}>h</span>
            </span>
            <span>
                <span style={{ fontWeight: 800, color: '#FFD700', fontSize: '1.2em' }}>{timeLeft.minutes}</span>
                <span style={{ fontSize: '0.8em', color: '#D4AF37', marginLeft: '2px' }}>m</span>
            </span>
            <span>
                <span style={{ fontWeight: 800, color: '#FFD700', fontSize: '1.2em' }}>{timeLeft.seconds}</span>
                <span style={{ fontSize: '0.8em', color: '#D4AF37', marginLeft: '2px' }}>s</span>
            </span>
        </div>
    );
};

export default RamadanCountdown;
