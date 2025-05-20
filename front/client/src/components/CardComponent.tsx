import { FC } from "react";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Card as AntdCard } from "antd";
import { IProduct } from "../api/products/models";

const { Meta } = AntdCard;
interface ICardComponent {
  product: IProduct;
}
const Card: FC<ICardComponent> = ({ product }) => (
  <AntdCard
    style={{ width: 300 }}
    cover={<img alt="example" src={product?.images[0]} />}
    actions={[<HeartOutlined key="like" />, <ShoppingOutlined key="basket" />]}
  >
    <Meta
      title={product?.title}
      description={product?.description?.slice(0, 43)}
    />
  </AntdCard>
);

export default Card;
