import callWebApi from '../helpers/webApiHelper';

export const getUsers = async params => {
  const { data } = await callWebApi({
    url: 'users',
    method: 'GET',
    params
  });
  return data;
};
