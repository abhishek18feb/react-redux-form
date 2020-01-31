export const  TRIM_USERNAME_SPACES = 'TRIM_USERNAME_SPACES';
export default function timeUserName(uname) {
    console.log(uname)
    return { type: "TRIM_USERNAME_SPACES", uname }
  };