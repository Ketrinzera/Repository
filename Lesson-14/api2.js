import RestClient from "./restclient.js";

const apiClient = new RestClient("https://api.restful-api.dev");

(async () => {
  const updatedData = {
    name: "Updated Device",
    data: {
      brand: "Lenovo",
      type: "Laptop",
      ram: "16GB"
    }
  };

  // Постав сюди id обʼєкта, який створив раніше
  const objectId = "ff808181932badb60196e34218003792";

  const response = await apiClient.sendPut({
    url: `/objects/${objectId}`,
    data: updatedData
  });

  console.log('Оновлений обʼєкт:', response.data);
})();
