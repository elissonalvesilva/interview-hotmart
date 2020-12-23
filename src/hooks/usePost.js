import { useState } from 'react';
import axios from 'axios';

const usePost = (url, body = null) => {
  const [status, setStatus] = useState(false);

  const send = async () => {
    setStatus(false);
    const { data } = await axios.post(url, { data: body });
    setStatus(true);
    return data;
  };

  if (!url) {
    throw new Error('must be pass a url');
  }

  return { status, send };
};

export default usePost;
