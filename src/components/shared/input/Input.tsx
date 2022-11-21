import { useState } from "react";
import styled from "styled-components";
interface Props {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  needEye?: boolean;
  openEye?: boolean;
}
export default function Input({
  type,
  placeholder,
  value,
  onChange,
  needEye = false,
}: Props) {
  const [openEye, setOpenEye] = useState<boolean>(true);
  const onEyeClick = () => {
    setOpenEye(!openEye);
  };
  return (
    <Wrapper>
      {needEye ? (
        <>
          {openEye ? (
            <>
              <Inner
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type="password"
              />
              <Icon onClick={onEyeClick} src="/icons/eye-open.svg" alt="" />
            </>
          ) : (
            <>
              <Inner
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type="text"
              />
              <Icon onClick={onEyeClick} src="/icons/eye-close.svg" alt="" />
            </>
          )}
        </>
      ) : (
        <Inner
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
      )}
      {/* <Inner placeholder={placeholder} type={type} />
      {needEye && <Icon src="/icons/eye-open.svg" alt="" />} */}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  position: relative;
`;
export const Icon = styled.img`
  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);
`;
export const Inner = styled.input`
  background: #ffffff;
  border-radius: 9px;
  width: 100%;
  height: 44px;
  border: none;
  padding: 0 15px;
  color: 303153;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  &::placeholder {
    color: rgba(25, 26, 64, 0.36);
    text-decoration: underline;
  }
`;
