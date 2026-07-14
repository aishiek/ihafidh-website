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
  isLiveSimulated: boolean;
  refresh: () => Promise<void>;
}

const INITIAL_MOCK_STATS: GlobalUmmahStats = {
  total_verses_memorized: 1248500, // 1.2M+ Verses Memorized
  total_surahs_completed: 25420,   // 25K+ Surahs Completed
  total_juz_completed: 3850,       // 3,850+ Juz Completed
  total_quizzes_ai: 142900,        // 142K+ AI Quizzes Evaluated
  total_audio_played: 489100,      // 489K+ Audio Recitations Played
  last_updated: new Date().toISOString(),
};

export function useGlobalUmmahStats(options?: { simulateLive?: boolean }): UseGlobalUmmahStatsReturn {
  const [stats, setStats] = useState<GlobalUmmahStats>(INITIAL_MOCK_STATS);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiveSimulated, setIsLiveSimulated] = useState<boolean>(false);

  const simulateLive = options?.simulateLive ?? true;

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 350));
      setStats((prev) => ({ ...prev, last_updated: new Date().toISOString() }));
    } catch (err) {
      console.error('Error refreshing stats:', err);
      setError('Failed to refresh latest community milestones.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load effect
  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  // Live Ummah activity simulation to create dynamic real-time social proof
  useEffect(() => {
    if (!simulateLive || loading) return;

    setIsLiveSimulated(true);
    const interval = setInterval(() => {
      setStats((prev) => {
        const verseIncrement = Math.floor(Math.random() * 3) + 1;
        const quizIncrement = Math.random() > 0.4 ? 1 : 0;
        const audioIncrement = Math.random() > 0.3 ? Math.floor(Math.random() * 2) + 1 : 0;

        return {
          ...prev,
          total_verses_memorized: prev.total_verses_memorized + verseIncrement,
          total_quizzes_ai: prev.total_quizzes_ai + quizIncrement,
          total_audio_played: prev.total_audio_played + audioIncrement,
          last_updated: new Date().toISOString(),
        };
      });
    }, 12000);

    return () => clearInterval(interval);
  }, [simulateLive, loading]);

  return {
    stats,
    loading,
    error,
    isLiveSimulated,
    refresh,
  };
}
