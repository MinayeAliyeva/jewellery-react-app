import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import { IProduct } from "../../api/products/models";
import { AxiosError } from "axios";
import Spin from "../../components/Spin";
import CardComponent from "../../components/CardComponent";
import { Col, Row } from "antd";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      const errMessage = (err as AxiosError).message;
      setError(errMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products", products);

  if (loading) {
    return (
      <div className="flex items-center  justify-center h-screen">
        <Spin />
      </div>
    );
  }
  if (error) {
    return <div className="text-red-600 ">Error:{error}</div>;
  }
  return (
    <>
      <Row gutter={[16, 16]}>
        {" "}
        {products?.map((product: IProduct) => (
          <Col key={product?.id} xs={24} sm={12} md={8} lg={6}>
            {" "}
            <CardComponent product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
