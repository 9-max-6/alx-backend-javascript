import { uploadPhoto, createUser } from "./utils";
export default function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()]).then((resp) => {
    return ()
  });
}
