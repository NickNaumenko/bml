import callWebApi from '../helpers/webApiHelper';

export const getUsers = async params => {
  const { data } = await callWebApi({
    url: 'users',
    method: 'GET',
    params
  });
  return data;
};

export const getUser = async id => {
  const { data } = await callWebApi({
    url: `users/${id}`,
    method: 'GET'
  });
  return data;
}

export const getUserStats = async (id, startDate, endDate) => {
  const params = {from: startDate, to: endDate};

  const { data } = await callWebApi({
    url: `users/${id}/stats`,
    method: 'GET',
    params
  });
  return data; 
}
