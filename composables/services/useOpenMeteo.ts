export default async () => {
  const cphLatitude = 55.676098;
  const cphLongitude = 12.568337;

  return await useGetLazyData<OpenMeteoNamespace.ICurrentWeather>({
    url: `https://api.open-meteo.com/v1/forecast?latitude=${cphLatitude}&longitude=${cphLongitude}&current_weather=true`,
    pick: ["current_weather"],
  });
};
