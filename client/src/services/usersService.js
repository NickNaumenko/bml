import callWebApi from '../helpers/webApiHelper';

export const getUsers = async () => {
  const { data } = await callWebApi({
    url: 'users',
    method: 'GET'
  });
  return data;
};
