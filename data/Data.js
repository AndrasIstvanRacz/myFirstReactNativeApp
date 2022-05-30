export const getData = async () => {
  let response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
  return await response.json();
}
