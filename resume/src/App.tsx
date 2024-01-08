import { useEffect, useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import ListGroup from "./ListGroup";
import Message from "./Message";
import Book from "./Book";
import Book1 from "./Book1";
import SideBar from "./components/SideBar";
let api = "https://hn.algolia.com/api/v1/search?query=html";

function App() {
  const [hits, setHit] = useState([]);
  const getData = async (url: any) => {
    try {
      await fetch(url).then(async (res) => {
        const data = await res.json();
        setHit(data.hits);
        console.log("hi1", data.hits);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(api);
  }, []);
  console.log("hits", hits);
  const listNames = ["hi"];
  const check = listNames.length === 0 ? <p>not found</p> : null;
  const checkLength = () => {
    return listNames.length === 0 && <p>not found</p>;
  };

  const handleClick = (item: string) => {
    console.log(item);
  };
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <>
      <SideBar></SideBar>
      {/* <Book1 child={hits}></Book1> */}
      {/* {hits.map((item: any, index: any) => {
        return <Book title={item.title} author={item.author}></Book>;
      })} */}
      {/* {alertVisibility && <Alert children="hello"></Alert>}
      <Button
        color="primary"
        onClick={() => {
          return setAlertVisibility(!alertVisibility);
        }}
      >
        Primary
      </Button>
      <ListGroup
        items={cityNames}
        headings="Cities"
        onSelected={handleClick}
      ></ListGroup>
      <ListGroup
        items={friends}
        headings="Friends"
        onSelected={handleClick}
      ></ListGroup> */}
    </>
  );
  // const temp='Ankita';
  // if(temp){
  //   return <div>Hello {temp}</div>
  // }
  // else{
  // return <div><Message></Message></div>;
  // }
}
export default App;
