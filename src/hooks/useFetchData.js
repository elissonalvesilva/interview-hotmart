import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, params = {}) => {
  const [status, setStatus] = useState(false);
  const [response, setResponse] = useState([]);
  const [responseStatus, setResponseStatus] = useState(200);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus(false);
      const { data, status: responseStatusAxios } = await axios.get(url);
      setResponse(data);
      setResponseStatus(responseStatusAxios);
      setStatus(true);
    };

    fetchData();
  }, [url]);

  return { status, response, responseStatus };
};

export default useFetch;
