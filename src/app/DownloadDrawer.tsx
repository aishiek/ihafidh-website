'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface DownloadDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DownloadDrawer({ isOpen, onClose }: DownloadDrawerProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'flex-end', // Bottom on mobile
                justifyContent: 'center', // Center on desktop usually
                pointerEvents: 'none' // Allow click through on overlay but catch on content? No, standard modal.
            }}
        >
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    pointerEvents: 'auto',
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                }}
            />

            {/* Drawer Content */}
            <div
                style={{
                    pointerEvents: 'auto',
                    background: '#0f172a', /* Dark bg matching theme */
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '24px 24px 0 0',
                    padding: '2rem',
                    width: '100%',
                    maxWidth: '500px',
                    boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
                    position: 'relative',
                    transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '0', // Mobile Bottom
                }}
                className="drawer-content" // Helper class for media queries if needed
            >
                {/* Decorative Handle */}
                <div style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', marginBottom: '0.5rem' }} />

                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Download iHafidh</h3>
                    <p style={{ color: '#94a3b8' }}>Select your store to start your journey.</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="https://play.google.com/store/apps/details?id=com.ihafidh" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }}>
                        <Image src="/appstore-badge.png" alt="Google Play Store" width={160} height={48} style={{ height: 'auto' }} />
                    </a>
                    <a href="https://apps.apple.com/sg/app/ihafidh/id6752505055" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }}>
                        <Image src="/playstore-badge.png" alt="Apple App Store" width={145} height={48} style={{ height: 'auto' }} />
                    </a>
                </div>

                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'transparent',
                        border: 'none',
                        color: '#64748b',
                        cursor: 'pointer'
                    }}
                >
                    <X size={24} />
                </button>
            </div>

            {/* Desktop Adjustments */}
            <style jsx>{`
        @media (min-width: 768px) {
          .drawer-content {
             margin-bottom: 2rem !important; /* Float a bit */
             border-radius: 24px !important;
          }
        }
      `}</style>
        </div>
    );
}
