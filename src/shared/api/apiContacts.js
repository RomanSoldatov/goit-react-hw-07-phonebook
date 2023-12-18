import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65800b536ae0629a3f543516.mockapi.io/contacts/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/', data);
};

export const editContact = data => {
  return contactsInstance.put(`/${data.id}`, {
    name: data.name,
    phone: data.phone,
  });
};
