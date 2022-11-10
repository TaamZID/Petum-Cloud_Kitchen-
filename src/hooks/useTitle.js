import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Petum`;
  }, [title]);
};

export default useTitle;
