import { RestClient } from ".";

const apiClient = new RestClient(('https://api.restful-api.dev'), {});

const createResponse = await apiClient.sendPost({
    url: '/objects',
    data: {
      name: 'Test Device',
      data: {
        brand: 'Lenovo',
        type: 'Laptop'
      }
    }
  });
  
  console.log('Створений обʼєкт:', createResponse.data);
  