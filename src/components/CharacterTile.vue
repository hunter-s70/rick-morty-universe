<template>
  <component
    :is="reference ? 'router-link' : 'div'"
    :to="reference"
    class="tile"
  >
    <p class="tile__title">{{ item.name }}</p>
    <img class="tile__img" :src="item.image" :alt="item.name" />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { characterPreview } from "@/api/__generated__/characterPreview";

export default defineComponent({
  name: "CharacterTile",

  props: {
    item: {
      type: Object as PropType<characterPreview>,
      required: true,
    },
    reference: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped lang="scss">
.tile {
  padding: 0 10px 15px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #dbdbdb;
  border-radius: 4px;
  background-color: rgba(237, 247, 243, 1);
  cursor: pointer;

  &:hover {
    border-color: #2c3e50;
  }

  &__title {
    overflow: hidden;
    width: 100%;
    margin: 10px auto;
    font-size: 0.7em;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__img {
    vertical-align: top;
    width: 100%;
    max-width: 300px;
  }
}
</style>
