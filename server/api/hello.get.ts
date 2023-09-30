export default defineEventHandler(async () => {
  // setInterval(() => {
  //   console.log("event interval");
  // }, 3000);
  const result = await GqlGetFrontpage();
  return {
    api: "hello",
    result: result,
  };
});
