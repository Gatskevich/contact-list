import axios from 'axios';

const api =
  'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/';

export async function getContactList() {
  const reqType = 'GET';
  const url = `${api}users.json`;

  return axios({
    method: reqType,
    url,
  });
}
