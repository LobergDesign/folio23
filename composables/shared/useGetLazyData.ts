export default async <T>({ url, pick, immediate = true }: Global.IFetch) => {
  const { data, error, execute, pending, status } = await useLazyFetch<T>(
    `${url}`,
    {
      pick: pick,
      immediate: immediate,
    }
  );
  return { data, error, execute, pending, status };
};
