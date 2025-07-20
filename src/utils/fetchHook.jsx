import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";

const useData = (url) => {
  const [dataStore, setDataStore] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(url);
        setDataStore(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return {dataStore};
};

export default useData;
