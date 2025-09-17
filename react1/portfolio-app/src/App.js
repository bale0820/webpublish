import { Content } from "./components/Content.jsx";
import { Header } from "./components/Header.jsx";
import './css/style.css';


export default function App() {
  // const homeData= {
  //   "img" : "/images/favicon.ico",
  //   "name" : "Judy",
  //   "title" : "Junior Developer",
  //   "description" : "A software engineer currently residing in Seoul, South Korea"
  // }
  return (
    <>
    <Header />
    <Content />
    </>
  );
}

