type FilterByType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

interface MixedProps {
  id: number;
  name: string;
  nickname: string;
  active: boolean;
  createdAt: Date;
}

type StringKeysOnly = FilterByType<MixedProps, string>; // 'name' | 'nickname'
