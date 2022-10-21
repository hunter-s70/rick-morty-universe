<template>
  <div class="locations">
    <div v-if="resultList.length">
      <div v-for="location in resultList" :key="location.id">
        <h3 v-html="getFullLocationName(location)"></h3>
        <span v-for="character in location.residents" :key="character.id">
          {{ character.name }},
        </span>
        <hr />
      </div>
    </div>

    <LoadMore v-if="pages" :page="page" :pages="pages" @click="loadMore" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useResult } from "@vue/apollo-composable";
import { getLocationsList } from "@/api/locations.gql";
import { UNKNOWN_DIMENSION } from "@/models/constants";
import { getLocations_locations_results } from "@/api/__generated__/getLocations";

import { useListContent } from "@/composables/useListContent";
import { usePagination } from "@/composables/usePagination";
import { usePaginationList } from "@/composables/usePaginationList";

import LoadMore from "@/components/LoadMore.vue";

type LocationsList = (getLocations_locations_results | null)[];

export default defineComponent({
  name: "LocationsPage",
  components: {
    LoadMore,
  },
  setup() {
    const data = computed(() => locations.value || null);

    const { list, info } = useListContent<LocationsList>(data);
    const { page, pages, nextPage } = usePagination(info);
    const { resultList, loadMore } = usePaginationList<LocationsList>(
      list,
      nextPage
    );

    const { result } = getLocationsList(page);
    const locations = useResult(result);

    return {
      page,
      pages,
      resultList,
      loadMore,
    };
  },

  methods: {
    getFullLocationName(location: getLocations_locations_results) {
      const fullName = `<b>${location.type}</b> "${location.name}"`;
      const dimension = location?.dimension;

      return dimension && dimension !== UNKNOWN_DIMENSION
        ? `${fullName} - ${dimension}`
        : fullName;
    },
  },
});
</script>

<style lang="scss">
.locations {
}
</style>
