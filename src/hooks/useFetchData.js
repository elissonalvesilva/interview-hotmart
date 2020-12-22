import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, params = {}) => {
  const [status, setStatus] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus(false);
      const { data } = await axios.get(url);
      setResponse(data);
      setStatus(true);
    };

    fetchData();
  }, [url]);

  return { status, response };
};

export default useFetch;
