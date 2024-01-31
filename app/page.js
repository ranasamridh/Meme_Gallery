import Header from "./components/Header";
import Memes from "./components/Memes";


const Home = () =>{
  return (
    <>
    <Header />
    <h1 style={{ color: 'grey', fontFamily: 'Comic Sans MS', fontSize: '40px', textAlign: 'center' }}>   
    Welcome to the ultimate gallery of humor, featuring infinite scrolling for endless joy!
</h1>


    <Memes />
    </>
  );
}
 export default Home;