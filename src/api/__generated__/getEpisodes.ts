/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterEpisode } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getEpisodes
// ====================================================

export interface getEpisodes_episodes_info {
  __typename: "Info";
  /**
   * The length of the response.
   */
  count: number | null;
  /**
   * The amount of pages.
   */
  pages: number | null;
  /**
   * Number of the next page (if it exists)
   */
  next: number | null;
  /**
   * Number of the previous page (if it exists)
   */
  prev: number | null;
}

export interface getEpisodes_episodes_results_characters {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
}

export interface getEpisodes_episodes_results {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
  /**
   * The code of the episode.
   */
  episode: string | null;
  /**
   * Time at which the episode was created in the database.
   */
  created: string | null;
  /**
   * The air date of the episode.
   */
  air_date: string | null;
  /**
   * List of characters who have been seen in the episode.
   */
  characters: (getEpisodes_episodes_results_characters | null)[];
}

export interface getEpisodes_episodes {
  __typename: "Episodes";
  info: getEpisodes_episodes_info | null;
  results: (getEpisodes_episodes_results | null)[] | null;
}

export interface getEpisodes {
  /**
   * Get the list of all episodes
   */
  episodes: getEpisodes_episodes | null;
}

export interface getEpisodesVariables {
  page?: number | null;
  filter?: FilterEpisode | null;
}
