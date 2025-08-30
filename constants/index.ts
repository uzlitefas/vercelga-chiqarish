import { Home, LayoutDashboard, PlayCircle, UserCheck2 } from "lucide-react";

export const navigation_link = [
  { title: "Home", route: "/", Icon: Home },
  { title: "Lives", route: "/lives", Icon: PlayCircle },
  { title: "Subscribtion", route: "/subsribtion", Icon: UserCheck2 },
  { title: "Dashboard", route: "/dashboard", Icon: LayoutDashboard },
];

export const users = [
  {
    id: "1",
    avatar:
      "https://cs15.pikabu.ru/post_img/2024/06/23/1/1719093912118195457.jpg",
    username: "MrCheese",
    follow: 1,
  },
  {
    id: "2",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxS9mLOcvLmWZziaZeB1G0DVbCJpxV_SpUQ&s",
    username: "GoldenPlay",
    follow: 101,
  },
  {
    id: "3",
    avatar: "https://i.redd.it/qm3p4sotkjgd1.jpeg",
    username: "DrForge",
    follow: 2000,
  },
];
