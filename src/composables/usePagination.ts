import { computed, ref } from "vue";
import type { Ref, ComputedRef } from "vue";
import { paginationInfo } from "@/api/__generated__/paginationInfo";

export interface IComposablePaginationInfo {
  page: Ref<number>;
  pages: ComputedRef<number | null>;
  next: ComputedRef<number | null>;
  nextPage: () => void;
}

export function usePagination(
  paginationInfo: ComputedRef<paginationInfo | null>
): IComposablePaginationInfo {
  const page = ref(1);
  const pages = computed(() => paginationInfo.value?.pages || null);
  const next = computed(() => paginationInfo.value?.next || null);
  const nextPage = () => {
    if (next.value) {
      page.value = next.value;
    }
  };

  return {
    page,
    pages,
    next,
    nextPage,
  };
}
