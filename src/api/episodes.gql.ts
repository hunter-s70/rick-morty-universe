import { Ref } from "vue";
import { useQuery, UseQueryReturn } from "@vue/apollo-composable";
import gql from "graphql-tag";

import { FilterEpisode } from "../../__generated__/globalTypes";
import { getEpisodes } from "@/api/__generated__/getEpisodes";

import {
  paginationInfoFragment,
  characterPreviewFragment,
  episodeInfoFragment,
} from "@/api/fragments";

export function getEpisodesList(
  page?: Ref<number> | null,
  filter?: Ref<FilterEpisode>
): UseQueryReturn<
  getEpisodes,
  {
    page: Ref<number> | null | undefined;
    filter: Ref<FilterEpisode> | undefined;
  }
> {
  return useQuery(
    gql`
      query getEpisodes($page: Int, $filter: FilterEpisode) {
        episodes(page: $page, filter: $filter) {
          info {
            ...paginationInfo
          }
          results {
            ...episodeFragment
            characters {
              ...characterPreview
            }
          }
        }
      }
      ${paginationInfoFragment}
      ${characterPreviewFragment}
      ${episodeInfoFragment}
    `,
    { page, filter }
  );
}
