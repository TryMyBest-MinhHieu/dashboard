import { User, Heart, ShoppingCart, Users, Package, Factory, Newspaper, Phone, FileText, FlaskConical, Brush, GlassWater, Droplets } from "lucide-react";

export const navItems = [
  {
    title: "Về chúng tôi",
    path: "#",
    submenu: [
      { title: "Giới thiệu", path: "/" },
      { title: "Hồ sơ năng lực", path: "/" },
    ],
  },
  {
    title: "Sản phẩm",
    path: "#",
    submenu: [
      { title: "Nước giặt xả", path: "/" },
      { title: "Nước lau sàn", path: "/" },
      { title: "Nước rửa chén", path: "/" },
      { title: "Nước lau bếp đa năng", path: "/" },
      { title: "Nước lau kính đa năng", path: "/" },
      { title: "Nước tẩy", path: "/" },
    ],
  },
  { title: "Gia công hóa phẩm", path: "/" },
  { title: "Tin tức", path: "/" },
  { title: "Liên hệ", path: "/" },
];

export const getMenuIcon = (title: string) => {
  switch (title) {
    // Icons cho menu chính
    case "Về chúng tôi":
      return Users;
    case "Sản phẩm":
      return Package;
    case "Gia công hóa phẩm":
      return Factory;
    case "Tin tức":
      return Newspaper;
    case "Liên hệ":
      return Phone;

    // Icons cho submenu
    case "Giới thiệu":
      return FileText;
    case "Hồ sơ năng lực":
      return FileText;
    case "Nước giặt xả":
      return FlaskConical;
    case "Nước lau sàn":
      return Brush;
    case "Nước rửa chén":
      return GlassWater;
    case "Nước lau bếp đa năng":
      return FlaskConical;
    case "Nước lau kính đa năng":
      return FlaskConical;
    case "Nước tẩy":
      return Droplets;
    default:
      return null;
  }
};

export const menuIcons = [
    { title: "Tài khoản", path: "/", icon: User },
    { title: "Danh sách yêu thích", path: "/", icon: Heart },
    { title: "Giỏ hàng", path: "/", icon: ShoppingCart },
];
