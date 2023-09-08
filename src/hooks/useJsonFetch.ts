import {useState} from 'react';

export default function useJsonFetch (url: string, opts: any) {

    const [data, setData] = useState<null | {status: string}>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status == 200) {
        try {
          const data = JSON.parse(xhr.response);
          setData(data);
          setError(null);
        } catch (error) {
            setError(null);
        }
      } else {
        setError(`Request failed with status ${xhr.status}`);
      }

      setIsLoading(false);
    };
    xhr.send();
    return [data, isLoading, error];
}