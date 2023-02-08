export const getData = async (): Promise<any> => {
  return fetch('data/discover.json')
    .then((response) =>  response.json())
    .then((data) => {
      return data
    });
}