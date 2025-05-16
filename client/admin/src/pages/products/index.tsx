import { useEffect, useState } from "react";
import { IProduct, IProductsParams } from "../../api/product/modules";
import Input from "../../components/form/Input";
import { useForm } from "react-hook-form";
import { getAllProducts } from "../../api/product";
import { AxiosError } from "axios";
import Button from "../../components/form/Button";
import Alert from "../../components/alert/Alert";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);

  const { control, getValues } = useForm();
  const fetchAllProducts = ({ limit }: IProductsParams) => {
    getAllProducts({ limit })
      .then((res) => {
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
    return <div>Loading...</div>;
  }

  return (
    <>
      {error && <Alert type="error" message={error} />}
      <Input name="limit" control={control} />
      <Button buttonText="Add Limit" onClick={addLimit} />
    </>
  );
};

export default Products;
