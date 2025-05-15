import { Table } from "antd";
import { ColumnType } from "antd/es/table";

const TableComponent2 = <T extends object>({
  columns,
  dataSource,
}: {
  columns: ColumnType<T>[];
  dataSource: T[];
}) => {
  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default TableComponent2;
