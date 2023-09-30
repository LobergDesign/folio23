export default async <T>({ url, pick }: GlobalNamespace.IFetch) =>
  await useLazyFetch<T>(`${url}`, { pick: pick });
