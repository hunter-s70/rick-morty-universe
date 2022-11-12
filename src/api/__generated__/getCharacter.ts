/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCharacter
// ====================================================

export interface getCharacter_character_origin {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The type of the location.
   */
  type: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
  /**
   * Time at which the location was created in the database.
   */
  created: string | null;
}

export interface getCharacter_character_location {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The type of the location.
   */
  type: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
  /**
   * Time at which the location was created in the database.
   */
  created: string | null;
}

export interface getCharacter_character_episode {
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
}

export interface getCharacter_character {
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
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
  /**
   * The type or subspecies of the character.
   */
  type: string | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * Time at which the character was created in the database.
   */
  created: string | null;
  /**
   * The character's origin location
   */
  origin: getCharacter_character_origin | null;
  /**
   * The character's last known location
   */
  location: getCharacter_character_location | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (getCharacter_character_episode | null)[];
}

export interface getCharacter {
  /**
   * Get a specific character by ID
   */
  character: getCharacter_character | null;
}

export interface getCharacterVariables {
  id: string;
}
