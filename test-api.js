const axios = require('axios');

const API = 'http://127.0.0.1:3005';

(async () => {
  try {
    console.log('1. GET /users');
    const users = await axios.get(`${API}/users`);
    console.log('   Status:', users.status, 'Data:', users.data);

    console.log('2. POST /users');
    const newUser = await axios.post(`${API}/users`, {
      name: 'Test',
      surname: 'User',
      username: 'test1'
    });
    console.log('   Status:', newUser.status, 'ID:', newUser.data._id);
    const userId = newUser.data._id;

    console.log('3. GET /users/:id');
    const user = await axios.get(`${API}/users/${userId}`);
    console.log('   Status:', user.status, 'Name:', user.data.name);

    console.log('4. PUT /users/:id');
    const updated = await axios.put(`${API}/users/${userId}`, {
      name: 'Test Updated'
    });
    console.log('   Status:', updated.status, 'Name:', updated.data.name);

    console.log('5. DELETE /users/:id');
    const deleted = await axios.delete(`${API}/users/${userId}`);
    console.log('   Status:', deleted.status);

    console.log('6. GET /users/:id (after delete)');
    try {
      await axios.get(`${API}/users/${userId}`);
    } catch (e) {
      console.log('   Status:', e.response.status, 'Error:', e.response.data.error);
    }

    console.log('\n Тесты пройдены!');
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error.message);
  }
})();