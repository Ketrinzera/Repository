import RestClient from "./restclient.js";

(async () => {
  const apiClient = new RestClient("https://api.restful-api.dev");

  const response1 = await apiClient.sendPost({
    url: "/objects",
    data: { data: { brand: "Lenovo", type: "Laptop" } }, // name пропущено
  });
  console.log("POST без name — статус:", response1.status);
  console.log("Тіло відповіді:", response1.data);

  const fakeId = "nonexistentid1234567890";
  const response2 = await apiClient.sendGet({ url: `/objects/${fakeId}` });
  console.log("GET неіснуючого id — статус:", response2.status);
  console.log("Тіло відповіді:", response2.data);

})();
