<template>
  <div class="episodes">
    <div class="episodes__section season">
      <span
        v-for="season in LAST_KNOWN_SEASON"
        :key="season"
        class="season__badge"
        @click="loadEpisodes(season)"
      >
        Season {{ season }}
      </span>
    </div>
    <div v-if="resultList.length" class="episodes__section">
      <episodes-list :episodes="resultList" class="episodes__list" />
    </div>
    <div class="episodes__section">
      <h2>Characters amount per episode</h2>
      <line-chart
        v-if="characterPerEpisodeData.length"
        :key="Math.random()"
        :data="characterPerEpisodeData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useResult } from "@vue/apollo-composable";
import { getEpisodesList } from "@/api/episodes.gql";
import { getEpisodes_episodes_results } from "@/api/__generated__/getEpisodes";

import { useListContent } from "@/composables/useListContent";
import { useEpisodes } from "@/composables/useEpisodes";

import EpisodesList from "@/components/EpisodesList.vue";
import LineChart from "@/components/LineChart.vue";

type EpisodesDataList = (getEpisodes_episodes_results | null)[];

export default defineComponent({
  name: "LocationsPage",
  components: {
    EpisodesList,
    LineChart,
  },
  setup() {
    const defaultSeason = 1;
    const data = computed(() => episodes.value || null);
    const { seasonSearchQuery, LAST_KNOWN_SEASON, loadEpisodes } =
      useEpisodes();

    loadEpisodes(defaultSeason);

    const { list } = useListContent<EpisodesDataList>(data);
    const { result } = getEpisodesList(null, seasonSearchQuery);
    const episodes = useResult(result);

    return {
      resultList: list,

      LAST_KNOWN_SEASON,
      loadEpisodes,
    };
  },
  computed: {
    characterPerEpisodeData(): number[] {
      const results: number[] = [];

      if (this.resultList.length) {
        results.push(0); // to start line chart from 0
        this.resultList.forEach(
          (episode: getEpisodes_episodes_results | null) => {
            results.push(episode?.characters.length || 0);
          }
        );
      }

      return results;
    },
  },
});
</script>

<style lang="scss">
.episodes {
  &__section {
    padding: 0 15px 20px;

    @media (min-width: 992px) {
      & {
        padding: 0 45px 60px;
      }
    }
  }
}

.season {
  &__badge {
    padding: 2px 5px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
