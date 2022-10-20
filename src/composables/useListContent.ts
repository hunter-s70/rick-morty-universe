import { computed } from "vue";
import type { ComputedRef } from "vue";
import { paginationInfo } from "@/api/__generated__/paginationInfo";

export interface IListContentData<T> {
  info: paginationInfo | null;
  results: T | null;
}

export interface IListContent<T> {
  info: ComputedRef<paginationInfo | null>;
  list: ComputedRef<T | null[]>;
}

export function useListContent<T>(
  data: ComputedRef<Readonly<IListContentData<T>> | null>
): IListContent<T> {
  const list = computed(() => data.value?.results || []);
  const info = computed(() => data.value?.info || null);

  return {
    list,
    info,
  };
}
