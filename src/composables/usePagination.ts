import { computed, ref } from "vue";
import type { Ref, ComputedRef } from "vue";
import { paginationInfo } from "@/api/__generated__/paginationInfo";

export interface IComposablePaginationInfo {
  page: Ref<number>;
  pages: ComputedRef<number | null>;
  next: ComputedRef<number | null>;
  canLoadPage: ComputedRef<boolean>;
  nextPage: () => void;
}

export function usePagination(
  paginationInfo: ComputedRef<paginationInfo | null>
): IComposablePaginationInfo {
  const page = ref(1);
  const pages = computed(() => paginationInfo.value?.pages || null);
  const next = computed(() => paginationInfo.value?.next || null);
  const canLoadPage = computed(
    () => !!next.value && page.value !== pages.value
  );
  const nextPage = () => {
    if (next.value) {
      page.value = next.value;
    }
  };

  return {
    page,
    pages,
    next,
    canLoadPage,
    nextPage,
  };
}
