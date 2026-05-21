import { test, expect } from '@playwright/test';

const BASE_URL = 'https://api.restful-api.dev/objects';

test.describe('REST API Automation', () => {

  let objectId: string;

  test('GET all objects', async ({ request }) => {

    const response = await request.get(BASE_URL);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();

    console.log(body);
  });

  test('POST create new object', async ({ request }) => {

    const requestBody = {
      name: 'BMW X5',
      data: {
        year: 2025,
        price: 95000,
        color: 'black'
      }
    };

    const response = await request.post(BASE_URL, {
      data: requestBody
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe('BMW X5');

    objectId = body.id;

    console.log(body);
  });

  test('DELETE created object', async ({ request }) => {

    // First create object to delete
    const createResponse = await request.post(BASE_URL, {
      data: {
        name: 'Temporary Object',
        data: {
          test: true
        }
      }
    });

    const createBody = await createResponse.json();

    const id = createBody.id;

    // Delete object
    const deleteResponse = await request.delete(`${BASE_URL}/${id}`);

    expect(deleteResponse.status()).toBe(200);

    const deleteBody = await deleteResponse.json();

    expect(deleteBody.message).toContain(id);

    console.log(deleteBody);
  });

});
