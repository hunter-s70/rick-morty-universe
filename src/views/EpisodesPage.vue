<template>
  <div class="episodes">
    <div v-if="resultList.length" class="episodes__section">
      <episodes-list :episodes="resultList" class="episodes__list" />
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
import EpisodesList from "@/components/EpisodesList.vue";

type EpisodesDataList = (getEpisodes_episodes_results | null)[];

export default defineComponent({
  name: "LocationsPage",
  components: {
    LoadMore,
    EpisodesList,
  },
  setup() {
    const data = computed(() => episodes.value || null);

    const { list, info } = useListContent<EpisodesDataList>(data);
    const { page, pages, nextPage } = usePagination(info);
    const { resultList, loadMore } = usePaginationList<EpisodesDataList>(
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
  &__section {
    padding: 0 15px 20px;

    @media (min-width: 992px) {
      & {
        padding: 0 45px 60px;
      }
    }
  }
}
</style>
