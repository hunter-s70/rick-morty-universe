import { Ref } from "vue";
import { useQuery, UseQueryReturn } from "@vue/apollo-composable";
import gql from "graphql-tag";

import { FilterEpisode } from "../../__generated__/globalTypes";
import { getEpisodes } from "@/api/__generated__/getEpisodes";

import {
  paginationInfoFragment,
  characterPreviewFragment,
} from "@/api/fragments";

export function getEpisodesList(
  page: Ref<number>,
  filter: FilterEpisode
): UseQueryReturn<getEpisodes, { page: Ref<number>; filter: FilterEpisode }> {
  return useQuery(
    gql`
      query getEpisodes($page: Int!, $filter: FilterEpisode!) {
        episodes(page: $page, filter: $filter) {
          info {
            ...paginationInfo
          }
          results {
            id
            name
            air_date
            episode
            created
            characters {
              ...characterPreview
            }
          }
        }
      }
      ${paginationInfoFragment}
      ${characterPreviewFragment}
    `,
    { page, filter }
  );
}
