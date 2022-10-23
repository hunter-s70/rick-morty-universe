<template>
  <div class="episodes">
    <div v-if="resultList.length">
      <div v-for="episode in resultList" :key="episode.id">
        <p>{{ episode.name }} - {{ episode.episode }}</p>
      </div>
    </div>

    <LoadMore v-if="pages" :page="page" :pages="pages" @click="loadMore" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useResult } from "@vue/apollo-composable";
import { getEpisodesList } from "@/api/episodes.gql";
import { getEpisodes_episodes_results } from "@/api/__generated__/getEpisodes";

import { useListContent } from "@/composables/useListContent";
import { usePagination } from "@/composables/usePagination";
import { usePaginationList } from "@/composables/usePaginationList";

import LoadMore from "@/components/LoadMore.vue";

type EpisodesList = (getEpisodes_episodes_results | null)[];

export default defineComponent({
  name: "LocationsPage",
  components: {
    LoadMore,
  },
  setup() {
    const data = computed(() => episodes.value || null);

    const { list, info } = useListContent<EpisodesList>(data);
    const { page, pages, nextPage } = usePagination(info);
    const { resultList, loadMore } = usePaginationList<EpisodesList>(
      list,
      nextPage
    );

    const filter = { episode: "S02" };
    const { result } = getEpisodesList(page, filter);
    const episodes = useResult(result);

    return {
      page,
      pages,
      resultList,
      loadMore,
    };
  },
});
</script>

<style lang="scss">
.episodes {
}
</style>
