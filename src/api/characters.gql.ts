import { Ref } from "vue";
import { useQuery, UseQueryReturn } from "@vue/apollo-composable";
import gql from "graphql-tag";

import { getCharacter } from "@/api/__generated__/getCharacter";
import { getCharacters } from "@/api/__generated__/getCharacters";

import {
  paginationInfoFragment,
  characterPreviewFragment,
  locationInfoFragment,
  episodeInfoFragment,
} from "@/api/fragments";

export function getCharactersList(
  page: Ref<number>
): UseQueryReturn<getCharacters, { page: Ref<number> }> {
  return useQuery(
    gql`
      query getCharacters($page: Int!) {
        characters(page: $page) {
          info {
            ...paginationInfo
          }
          results {
            ...characterPreview
          }
        }
      }
      ${paginationInfoFragment}
      ${characterPreviewFragment}
    `,
    { page }
  );
}

export function getCharacterInfo(
  id: string | string[]
): UseQueryReturn<getCharacter, { id: string | string[] }> {
  return useQuery(
    gql`
      query getCharacter($id: ID!) {
        character(id: $id) {
          ...characterPreview
          gender
          type
          status
          species
          created
          origin {
            ...locationFragment
          }
          location {
            ...locationFragment
          }
          episode {
            ...episodeFragment
          }
        }
      }
      ${characterPreviewFragment}
      ${locationInfoFragment}
      ${episodeInfoFragment}
    `,
    { id }
  );
}
