"use client";
import useSWR from "swr";
import axios from "axios";

const SwrComponent = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) {
    return (
      <div className="mt-9 text-2xl text-red-500">
        Error loading information
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mt-9 text-2xl text-blue-500">Loading, please wait</div>
    );
  }
  return (
    <div>
      <h1 className="text-green-600 mt-9 text-2xl">Success</h1>
    </div>
  );
};

export default SwrComponent;
