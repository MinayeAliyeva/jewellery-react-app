import { getAllProducts } from "../../api/products";
import { IProduct } from "../../api/products/models";
import Spin from "../../components/spin/Spin";
import { Col, Row } from "antd";
import Card from "../../components/card/Card";
import useGetData from "../../hooks/useGetData";

const Home = () => {
  const { loading, error, dataList } = useGetData<IProduct>({
    fethAllData: getAllProducts,
    key: "products",
  });

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
  if (!dataList || dataList.length === 0) {
    return <div>No products available</div>;
  }
  return (
    <>
      <Row gutter={[16, 16]}>
        {" "}
        {dataList?.map((product: IProduct) => (
          <Col key={product?.id} xs={24} sm={12} md={8} lg={6}>
            {" "}
            <Card product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
