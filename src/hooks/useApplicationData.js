import { useEffect, useState } from "react";

import axios from "axios";

export default function useApplicationData() {
  /* initialized empty array as state and updated it with data from API during axios GET request */
  const [state, setState] = useState({
    shot: [],
  });

  useEffect(() => {
    axios
      .get("https://dribbble.s3.amazonaws.com/uploads/_/shots.json")
      .then((response) => {
        const data = response.data;
        setState((prev) => ({ ...prev, shot: data }));
      })
      .catch((error) => console.log(error));
  }, []);

  return { state };
}
