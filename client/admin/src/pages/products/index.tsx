import { useEffect, useState } from "react";
import { IProduct, IProductsParams } from "../../api/product/modules";
import Input from "../../components/form/Input";
import { useForm } from "react-hook-form";
import { getAllProducts } from "../../api/product";
import { AxiosError } from "axios";
import Button from "../../components/form/Button";
import Alert from "../../components/alert/Alert";
import Spin from "../../components/spinner/Spin";
import Table from "../../components/table/Table";
import { columns } from "./data";
import { ColumnsType } from "antd/es/table";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);
  console.log({ products });
  const { control, getValues } = useForm();
  const fetchAllProducts = ({ limit }: IProductsParams) => {
    getAllProducts({ limit })
      .then((res) => {
        setLoading(true);
        if (!res?.data?.products?.length) {
          setError("Does not found!!!");
          return;
        }
        setError("");
        const products = res?.data?.products;
        setProducts(products);
      })
      .catch((err) => {
        const { message } = err as AxiosError;
        setError(message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };
  useEffect(() => {
    setLoading(true);
    fetchAllProducts({});
  }, []);
  const addLimit = () => {
    const limit = getValues("limit");
    fetchAllProducts({ limit });
  };
  if (loading) {
    return <Spin />;
  }
  const dataSourceTitle: { title: string }[] = products?.map(
    (product: IProduct) => ({
      title: product?.title,
    })
  );
  console.log("te");

  return (
    <>
      {error && <Alert type="error" message={error} />}
      <Input name="limit" control={control} />
      <Button buttonText="Add Limit" onClick={addLimit} />
      <Table<{ title: string }>
        columns={columns}
        dataSource={dataSourceTitle}
      />
    </>
  );
};

export default Products;
