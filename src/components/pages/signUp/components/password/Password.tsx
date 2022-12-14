import Input from "../../../../shared/input/Input";
import { Button, Line } from "../../SignUpStyles";
import { Label } from "./PasswordStyles";

export default function Password() {
  return (
    <>
      <h1>Create a password</h1>
      <Input type="password" placeholder="k3kwlulw1337" needEye={true} />
      <Label>Confrim the password</Label>
      <Input type="password" placeholder="k3kwlulw1337" needEye={true} />
      <Button>
        <span>Next Step</span>
        <Line />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1717 0.395039L19.6469 9.08585C19.7753 9.21752 19.8665 9.36018 19.9204 9.5138C19.9735 9.66743 20 9.83203 20 10.0076C20 10.1832 19.9735 10.3478 19.9204 10.5014C19.8665 10.655 19.7753 10.7977 19.6469 10.9293L11.1717 19.6202C10.9363 19.8616 10.6423 19.988 10.2896 19.9994C9.93601 20.0099 9.63082 19.8835 9.374 19.6202C9.11718 19.3787 8.9832 19.0772 8.97207 18.7155C8.9618 18.353 9.08507 18.04 9.34189 17.7767L15.634 11.3244H1.28411C0.920278 11.3244 0.615089 11.1984 0.36854 10.9465C0.122847 10.6936 -4.55177e-07 10.3807 -4.55177e-07 10.0076C-4.55177e-07 9.63451 0.122847 9.32199 0.36854 9.07004C0.615089 8.81722 0.920278 8.69081 1.28411 8.69081H15.634L9.34189 2.23854C9.10647 1.99713 8.9832 1.68988 8.97207 1.31679C8.9618 0.9437 9.08507 0.63645 9.34189 0.395039C9.57731 0.131681 9.87694 7.57069e-07 10.2408 7.57069e-07C10.6046 7.57069e-07 10.9149 0.131681 11.1717 0.395039V0.395039Z"
            fill="white"
          />
        </svg>
      </Button>
    </>
  );
}
