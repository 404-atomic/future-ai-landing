import { SanityClient as OriginalSanityClient } from '@sanity/client';

declare module '@sanity/client' {
  export interface SanityClient extends OriginalSanityClient {
    fetch<T>(query: string, params?: Record<string, any>): Promise<T>;
  }
} 