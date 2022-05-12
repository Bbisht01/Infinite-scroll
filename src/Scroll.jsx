import "./styles.css";
import useScroll from "react-use-scroll";
import { useEffect, useState } from "react";

export default function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(Array.from(Array(30).keys(), (n) => n + 1));

  useEffect(() => {
    const newData = setPage(page);
    setData((previousData) => [...previousData, ...newData]);
  }, [page, setData]);

  // const scrollPosition = useScroll();

  // useEffect(() => {
  //   if (scrollPosition > document.body.offsetHeight - window.innerHeight) {
  //     setPage(page + 1);
  //   }
  // });
  return (
    <div className="App">
      {data.map((el) => (
        <li>{el}</li>
      ))}
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
}
