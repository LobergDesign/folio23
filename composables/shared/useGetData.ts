export default async <T>({ url, pick }: GlobalNamespace.IFetch) =>
  await useFetch<T>(`${url}`, { pick: pick, lazy: false });
