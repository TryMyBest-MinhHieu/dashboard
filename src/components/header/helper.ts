import { User, Heart, ShoppingCart, Users, Package, Factory, Newspaper, Phone, FileText, FlaskConical, Brush, GlassWater, Droplets } from "lucide-react";

export const navItems = [
  {
    title: "VỀ CHÚNG TÔI",
    path: "#",
    submenu: [
      { title: "GIỚI THIỆU", path: "/" },
      { title: "HỒ SƠ NĂNG LỰC", path: "/" },
    ],
  },
  {
    title: "SẢN PHẨM",
    path: "#",
    submenu: [
      { title: "NƯỚC GIẶT XẢ", path: "/" },
      { title: "NƯỚC LAU SÀN", path: "/" },
      { title: "NƯỚC RỬA CHÉN", path: "/" },
      { title: "NƯỚC LAU BẾP ĐA NĂNG", path: "/" },
      { title: "NƯỚC LAU KÍNH ĐA NĂNG", path: "/" },
      { title: "NƯỚC TẨY", path: "/" },
    ],
  },
  { title: "GIA CÔNG HÓA PHẨM", path: "/" },
  { title: "TIN TỨC", path: "/" },
  { title: "LIÊN HỆ", path: "/" },
];

export const getMenuIcon = (title: string) => {
  switch (title) {
    // Icons cho menu chính
    case "VỀ CHÚNG TÔI":
      return Users;
    case "SẢN PHẨM":
      return Package;
    case "GIA CÔNG HÓA PHẨM":
      return Factory;
    case "TIN TỨC":
      return Newspaper;
    case "LIÊN HỆ":
      return Phone;

    // Icons cho submenu
    case "GIỚI THIỆU":
      return FileText;
    case "HỒ SƠ NĂNG LỰC":
      return FileText;
    case "NƯỚC GIẶT XẢ":
      return FlaskConical;
    case "NƯỚC LAU SÀN":
      return Brush;
    case "NƯỚC RỬA CHÉN":
      return GlassWater;
    case "NƯỚC LAU BẾP ĐA NĂNG":
      return FlaskConical;
    case "NƯỚC LAU KÍNH ĐA NĂNG":
      return FlaskConical;
    case "NƯỚC TẨY":
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
