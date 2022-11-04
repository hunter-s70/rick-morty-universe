<template>
  <div v-if="episodes && episodes.length" class="episodes">
    <p v-for="episode in episodes" :key="episode.id" class="episodes__episode">
      <span class="episodes__episode-title">{{ episode.name }}</span>
      <span class="episodes__episode-date">({{ episode.air_date }})</span>
      <span class="episodes__episode-separator"></span>
      <span class="episodes__episode-number">{{ episode.episode }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { episodeFragment } from "@/api/__generated__/episodeFragment";

export default defineComponent({
  name: "EpisodesList",

  props: {
    episodes: {
      type: Array as PropType<episodeFragment[]>,
      required: true,
      default: () => {
        return [];
      },
    },
  },
});
</script>

<style scoped lang="scss">
.episodes {
  &__episode {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    grid-template-rows: 30px;
    align-items: baseline;
    column-gap: 10px;

    &-title {
      font-weight: bold;
    }

    &-date {
      font-size: 0.7em;
      opacity: 0.8;
    }

    &-separator {
      display: inline-block;
      border-bottom: 2px dotted;
    }
  }
}
</style>
