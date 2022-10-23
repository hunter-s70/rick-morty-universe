import { Ref } from "vue";
import { useQuery, UseQueryReturn } from "@vue/apollo-composable";
import gql from "graphql-tag";

import { getEpisodes } from "@/api/__generated__/getEpisodes";

import {
  paginationInfoFragment,
  characterPreviewFragment,
} from "@/api/fragments";

export function getEpisodesList(
  page: Ref<number>
): UseQueryReturn<getEpisodes, { page: Ref<number> }> {
  return useQuery(
    gql`
      query getEpisodes($page: Int!) {
        episodes(page: $page) {
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
    { page }
  );
}
