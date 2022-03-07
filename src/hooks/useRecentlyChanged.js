import { useEffect, useState } from "react";

export function useRecentlyChanged(props) {
  const [isNew, setIsNew] = useState(false);
  useEffect(() => {
    setIsNew(true);
    const timeoutId = setTimeout(() => setIsNew(false), 1000);
    return () => clearTimeout(timeoutId);
  }, [props]);
  return isNew;
}
