import { useRef } from "react";

const useScroll = () => {
  const elRef = useRef<null | HTMLDivElement>(null);
  const executeScroll = () =>
    elRef.current?.scrollIntoView({ behavior: "smooth" });
  return [elRef, executeScroll];
};

export default useScroll;
