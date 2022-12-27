export const getData = async (): Promise<any> => {
  return fetch('api/discover')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data
    });
}