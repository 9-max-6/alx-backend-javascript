import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((resp) =>
    resp.map((resp_item) => ({
      status: respItem.status,
      value:
        respItem.status === "fulfilled"
          ? respItem.value
          : String(respItem.reason),
    }))
  );
}
