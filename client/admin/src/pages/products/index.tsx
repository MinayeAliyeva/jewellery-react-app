import TableComponent from "../../components/table/TableComponent";
import { columns, data } from "./data";

const Products = () => {
  return (
    <>
      <TableComponent columns={columns} dataSource={data} />
    </>
  );
};

export default Products;
