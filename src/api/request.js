import { authHeader, header } from "./header";

const handleResponse = async (response) => {
  let res = await response.json();
  if (!response.ok) throw Error(`${res.message}`);
  return res;
};

function get(url) {
  return fetch(url, { method: "GET", headers: header() }).then(handleResponse);
}

function authGet(url, param) {
  return fetch(url + param, { method: "GET", headers: authHeader() }).then(
    handleResponse
  );
}

function post(url, body) {
  return fetch(url, {
    method: "POST",
    headers: header(),
    body: JSON.stringify(body),
  }).then(handleResponse);
}

function authPost(url, body) {
  return fetch(url, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(body),
  }).then(handleResponse);
}

function authPut(url, body) {
  return fetch(url, {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify(body),
  }).then(handleResponse);
}

function authDelete(url, body) {
  return fetch(url, {
    method: "DELETE",
    headers: authHeader(),
    body: JSON.stringify(body),
  }).then(handleResponse);
}

export { get, authGet, post, authPost, authPut, authDelete };
