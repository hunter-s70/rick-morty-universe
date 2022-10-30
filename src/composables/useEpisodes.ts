import { ref } from "vue";
import type { Ref } from "vue";
import { FilterEpisode } from "../../__generated__/globalTypes";

export interface IComposableEpisodes {
  seasonSearchQuery: Ref<FilterEpisode>;
  LAST_KNOWN_SEASON: Ref<number>;
  getSeasonName: (season: number) => string;
  getSeasonQuery: (seasonName: string) => FilterEpisode;
  loadEpisodes: (season: number) => void;
}

export function useEpisodes(): IComposableEpisodes {
  const LAST_KNOWN_SEASON = ref(5);
  const seasonSearchQuery = ref();

  const getSeasonName = (season: number): string => {
    return `S${String(season).padStart(2, "0")}`;
  };

  const getSeasonQuery = (seasonName: string): FilterEpisode => {
    return { episode: seasonName };
  };

  const loadEpisodes = (season: number): void => {
    const seasonName = getSeasonName(season);
    seasonSearchQuery.value = getSeasonQuery(seasonName);
  };

  return {
    seasonSearchQuery,
    LAST_KNOWN_SEASON,
    getSeasonName,
    getSeasonQuery,
    loadEpisodes,
  };
}
