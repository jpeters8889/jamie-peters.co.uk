export type DefaultProps = {
  [x: string]: unknown;
  meta: MetaProps;
  errors: import('@inertiajs/core').Errors & import('@inertiajs/core').ErrorBag;
};

export type MetaProps = {
  baseUrl: string;
  currentUrl: string;
  title: string;
  description: string;
  image: string;
};
