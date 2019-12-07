import callWebApi from '../helpers/webApiHelper';

export const getUsers = async () => {
  const response = await callWebApi({
    url: 'users',
    type: 'GET'
  });
  return response.json();
};
