import { Ref } from "vue";
import { useQuery, UseQueryReturn } from "@vue/apollo-composable";
import gql from "graphql-tag";

import { getLocations } from "@/api/__generated__/getLocations";

import {
  paginationInfoFragment,
  characterPreviewFragment,
} from "@/api/fragments";

export function getLocationsList(
  page: Ref<number>
): UseQueryReturn<getLocations, { page: Ref<number> }> {
  return useQuery(
    gql`
      query getLocations($page: Int!) {
        locations(page: $page) {
          info {
            ...paginationInfo
          }
          results {
            id
            name
            type
            dimension
            created
            residents {
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
