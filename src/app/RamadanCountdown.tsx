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
            background: 'rgba(0,0,0,0.2)',
            padding: '0.2rem 0.8rem',
            borderRadius: '8px',
            marginLeft: '0.5rem',
            fontSize: '0.9em',
            fontVariantNumeric: 'tabular-nums'
        }}>
            <span>
                <span style={{ fontWeight: 700, color: '#fbbf24' }}>{timeLeft.days}</span>d
            </span>
            <span>
                <span style={{ fontWeight: 700, color: '#fbbf24' }}>{timeLeft.hours}</span>h
            </span>
            <span>
                <span style={{ fontWeight: 700, color: '#fbbf24' }}>{timeLeft.minutes}</span>m
            </span>
        </div>
    );
};

export default RamadanCountdown;
