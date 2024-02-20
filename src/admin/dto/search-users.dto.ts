// src/users/dto/search-users.dto.ts

export class SearchUsersDto {
  // Define your search criteria fields
  // For example, searching by name, email, etc.
  auid: number;
  name?: string;
  uid?: number;
  role?: string[];
}
