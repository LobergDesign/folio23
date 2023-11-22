export default async <T>({ url, pick }: Global.IFetch) =>
  await useFetch<T>(`${url}`, { pick: pick, lazy: false });
