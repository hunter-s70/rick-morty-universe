<template>
  <div class="locations">
    <div v-if="resultList.length">
      <div
        v-for="location in resultList"
        :key="location.id"
        class="locations__location"
      >
        <h2 v-html="getFullLocationName(location)"></h2>
        <p class="locations__section-name">Residents</p>
        <div v-if="location.residents.length" class="locations__characters">
          <CharacterTile
            v-for="character in location.residents"
            :reference="`/characters/${character.id}`"
            :key="character.id"
            :item="character"
            class="locations__character-tile"
          />
        </div>
        <div v-else>Unknown</div>
      </div>
    </div>

    <LoadMore
      v-if="pages && canLoadPage"
      :page="page"
      :pages="pages"
      @click="loadMore"
    />
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

import CharacterTile from "@/components/CharacterTile.vue";
import LoadMore from "@/components/LoadMore.vue";

type LocationsList = (getLocations_locations_results | null)[];

export default defineComponent({
  name: "LocationsPage",
  components: {
    CharacterTile,
    LoadMore,
  },
  setup() {
    const data = computed(() => locations.value || null);

    const { list, info } = useListContent<LocationsList>(data);
    const { page, pages, nextPage, canLoadPage } = usePagination(info);
    const { resultList, loadMore } = usePaginationList<LocationsList>(
      list,
      nextPage
    );

    const { result } = getLocationsList(page);
    const locations = useResult(result);

    return {
      page,
      pages,
      canLoadPage,
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
$tile-width: 90px;

.locations {
  padding: 10px 10px 40px;

  &__location:not(:last-child) {
    margin-bottom: 80px;
  }

  &__section-name {
    font-weight: bold;
  }

  &__characters {
    display: grid;
    grid-template-columns: repeat(3, $tile-width);
    grid-gap: 10px 10px;
    justify-content: center;
    max-width: 2000px;
    margin: auto;
    padding: 0 10px;

    @media (min-width: 576px) {
      & {
        grid-template-columns: repeat(5, $tile-width);
      }
    }

    @media (min-width: 768px) {
      & {
        grid-template-columns: repeat(7, $tile-width);
      }
    }

    @media (min-width: 1200px) {
      & {
        grid-template-columns: repeat(12, $tile-width);
      }
    }

    @media (min-width: 1400px) {
      & {
        grid-template-columns: repeat(14, $tile-width);
      }
    }
  }

  &__character-tile {
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
