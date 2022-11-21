type Company = {
  name: string;
  icon: string;
};
type SocialNetworks = Array<Company>;

export const socialNetworks: SocialNetworks = [
  {
    name: "Apple",
    icon: "/icons/apple.svg",
  },
  {
    name: "Google",
    icon: "/icons/google.svg",
  },
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
  },
];
