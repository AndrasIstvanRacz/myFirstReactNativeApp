export const getData = async () => {
  let response = await fetch('https://picsum.photos/v2/list?page=1&limit=1000');
  return await response.json();
}
