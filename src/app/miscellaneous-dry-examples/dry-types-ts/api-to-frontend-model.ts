// Assuming an API response type
interface ApiResponse {
  user_name: string;
  user_age: number;
  is_active: boolean;
}

// Desired frontend model
interface UserModel {
  userName: string;
  userAge: number;
  isActive: boolean;
}

// Utility type to convert snake_case to CamelCase
type CamelCase<S extends string> = S extends `${infer T}_${infer U}` ? `${T}${Capitalize<CamelCase<U>>}` : S;

// Mapping API response to the frontend model
type ApiToFrontend<T> = {
  [K in keyof T as CamelCase<K>]: T[K]
};

type MappedUserModel = ApiToFrontend<ApiResponse>;
