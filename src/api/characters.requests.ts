import { Ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export function getCharactersList(page: Ref) {
  return useQuery(
    gql`
      query getCharacters($page: Int!) {
        characters(page: $page) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            image
          }
        }
      }
    `,
    { page }
  );
}
