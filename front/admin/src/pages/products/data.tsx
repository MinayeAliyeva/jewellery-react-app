import { ColumnsType } from "antd/es/table";
import { IProduct } from "../../api/product/modules";
import { Image } from "antd";
import pImg from "./p1.jpg";
export const columns: ColumnsType<IProduct> = [
  {
    title: "Product Image",
    dataIndex: "image",
    key: "image",
    render(value, record, index) {
      return <Image src={value[0]} />;
    },
  },
  {
    title: "Product Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Product Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
];
