import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Keep On Moving Edinburgh - ${title}`;
  }, [title]);
  return;
};

export default useTitle;
