function parseJSON(response: any) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error: any = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(url: any, options?: any) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
