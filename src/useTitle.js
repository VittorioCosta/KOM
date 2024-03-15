import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `KO Moving - ${title}`;
  }, [title]);
  return;
};

export default useTitle;
