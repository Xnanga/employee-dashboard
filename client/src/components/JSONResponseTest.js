import { useState, useEffect } from "react";

const JSONResponseTest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setData(data.message);
    };
    getData();
  }, []);

  return <p>{!data ? "Loading..." : data}</p>;
};

export default JSONResponseTest;
