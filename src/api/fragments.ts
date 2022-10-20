import gql from "graphql-tag";

/**
 * Fragment with pagination info
 */
export const paginationInfoFragment = gql`
  fragment paginationInfo on Info {
    count
    pages
    next
    prev
  }
`;

/**
 * Fragment with character preview data
 */
export const characterPreviewFragment = gql`
  fragment characterPreview on Character {
    id
    name
    image
  }
`;

/**
 * Fragment with location info
 */
export const locationInfoFragment = gql`
  fragment locationFragment on Location {
    id
    name
    type
    dimension
    created
  }
`;

/**
 * Fragment with episode details
 */
export const episodeInfoFragment = gql`
  fragment episodeFragment on Episode {
    id
    name
    episode
    created
  }
`;
