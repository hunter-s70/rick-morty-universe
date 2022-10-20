/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getLocations
// ====================================================

export interface getLocations_locations_info {
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

export interface getLocations_locations_results_residents {
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

export interface getLocations_locations_results {
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
  /**
   * List of characters who have been last seen in the location.
   */
  residents: (getLocations_locations_results_residents | null)[];
}

export interface getLocations_locations {
  __typename: "Locations";
  info: getLocations_locations_info | null;
  results: (getLocations_locations_results | null)[] | null;
}

export interface getLocations {
  /**
   * Get the list of all locations
   */
  locations: getLocations_locations | null;
}

export interface getLocationsVariables {
  page: number;
}
