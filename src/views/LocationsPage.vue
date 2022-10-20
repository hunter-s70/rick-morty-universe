<template>
  <div v-if="locations" class="locations">
    <div v-if="locationsList.length">
      <div v-for="location in locationsList" :key="location.id">
        <h3 v-html="getFullLocationName(location)"></h3>
        <span v-for="character in location.residents" :key="character.id">
          {{ character.name }},
        </span>
        <hr />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useResult } from "@vue/apollo-composable";
import { getLocationsList } from "@/api/locations.gql";
import { getLocations_locations_results } from "@/api/__generated__/getLocations";
import { UNKNOWN_DIMENSION } from "@/models/constants";

export default defineComponent({
  name: "LocationsPage",
  setup() {
    const page = ref(1);
    const { result } = getLocationsList(page);
    const locations = useResult(result);

    return {
      page,
      locations,
    };
  },

  computed: {
    locationsList(): (getLocations_locations_results | null)[] {
      return this.locations?.results || [];
    },
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
