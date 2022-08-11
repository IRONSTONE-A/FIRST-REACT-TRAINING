import Card from "./components/card/Card"
import data from "./util/data";

function App() {
  console.log(data);
  return (
    <div>
    {data.map((item) => {
      const{ id, img, btnName, dil}= item
      return <Card key={id} img={img} btnName={btnName} dil={dil}/>
  
    })}
     
    </div>
  );
}

export default App;