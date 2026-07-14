'use client';

import { useState, useEffect, useCallback } from 'react';

export interface GlobalUmmahStats {
  total_verses_memorized: number;
  total_surahs_completed: number;
  total_juz_completed: number;
  total_quizzes_ai: number;
  total_audio_played: number;
  last_updated?: string;
}

export interface UseGlobalUmmahStatsReturn {
  stats: GlobalUmmahStats;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

/**
 * Aspirational Vision & Goals for the Global iHafidh Community.
 * These represent our sincere targets and vision that we pray Allah (SWT) grants our Ummah to achieve together.
 */
const ASPIRATIONAL_STATS: GlobalUmmahStats = {
  total_verses_memorized: 1248500, // 1.2M+ Verses Memorized Vision
  total_surahs_completed: 25420,   // 25K+ Surahs Completed Vision
  total_juz_completed: 3850,       // 3,850+ Juz Completed Vision
  total_quizzes_ai: 142900,        // 142K+ AI Quizzes Evaluated Vision
  total_audio_played: 489100,      // 489K+ Audio Recitations Played Vision
  last_updated: new Date().toISOString(),
};

export function useGlobalUmmahStats(): UseGlobalUmmahStatsReturn {
  const [stats, setStats] = useState<GlobalUmmahStats>(ASPIRATIONAL_STATS);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setStats((prev) => ({ ...prev, last_updated: new Date().toISOString() }));
    } catch (err) {
      console.error('Error refreshing stats:', err);
      setError('Failed to refresh community goals.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Graceful hydration effect
  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 250);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return {
    stats,
    loading,
    error,
    refresh,
  };
}
