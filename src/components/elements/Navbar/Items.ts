interface INavbarItem {
  Icon?: string;
  text: string;
  link: string;
}

const navItems: INavbarItem[] = [
  {
    Icon: "",
    text: "전통주",
    link: "/",
  },
  {
    Icon: "",
    text: "커뮤니티",
    link: "/community",
  },
  {
    Icon: "",
    text: "갤러리",
    link: "/gallery",
  },
  {
    Icon: "",
    text: "내주변술집",
    link: "/around",
  },
];

export default navItems;
