import { About } from "./content/About";
import { Home } from "./content/Home";

export function Content() {
     const homeData= {
    "img" : "/images/favicon.ico",
    "name" : "Judy",
    "title" : "Junior Developer",
    "description" : "A software engineer currently residing in Seoul, South Korea"
  }
    return(
        <>
        <Home data={homeData}/>
        <About />
        </>
    );
}