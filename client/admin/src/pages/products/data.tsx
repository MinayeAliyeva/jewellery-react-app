import { ColumnsType } from "antd/es/table";

export const columns: ColumnsType<{ title: string }> = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
];
