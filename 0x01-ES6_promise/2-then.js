export default function handleResponseFromApi(promise) {
  return promise
    .then(() => {
      return {
        status: 200,
        body: "success",
      };
    })
    .catch(() => {
      throw new Error();
    })
    .finally(() => {
      console.log("Got a response from the API");
    });
}
