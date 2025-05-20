import { useEffect, useState } from "react";
import { AxiosError } from "axios";
interface IState<T> {
  loading?: boolean;
  error?: string;
  dataList?: T[];
}

const useGetData = <T,>({
  fethAllData,
  key,
}: {
  fethAllData: () => Promise<any>;
  key: string;
}) => {
  const [state, setState] = useState<IState<T>>({
    loading: false,
    error: "",
    dataList: [],
  });
  const setStateBulk = <T,>(data: T): void => {
    setState((prev) => ({ ...prev, ...data }));
  };
  const fetchData = () => {
    try {
      setStateBulk({ loading: true });
      fethAllData()?.then((res) => {
        setStateBulk({ dataList: res.data?.[key] });
      });
    } catch (err) {
      const { message } = err as AxiosError;
      setStateBulk({ error: message });
    } finally {
      setStateBulk({ loading: false });
    }
  };

  console.log(state);
  useEffect(() => {
    fetchData();
  }, []);

  return state;
};

export default useGetData;
