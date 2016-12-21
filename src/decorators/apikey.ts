/**
 * Decorator to denote that a controller uses apikey authentication.
 *
 * **name** is the name of the query parameter or header where the apikey is located.
 * **location** specifies where the apikey is located (header or query).
 */
export function ApiKey(name: string, location: ApiKeyLocation): any {
  return () => { return; };
}

export enum ApiKeyLocation {
  Header,
  Query
}
