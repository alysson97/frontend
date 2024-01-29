import Header from "./pages/header";
import Items from "./components/table";

async function getData() {
  const res = await fetch("http://localhost:8800/", { cache: "no-store" });


  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function App(){
  const jsonData = await getData();

  return(
    <>
    
    <div className="container m-0">
      <Header/>
      <div className="lg:px-16 mt-16">
        <h2 className="p-6">Produtos</h2>
        <div className="px-16 py-12 border rounded-xl">
          <Items data={jsonData} />
        </div>  
      </div>
      
    </div>
      
    </>
  );
}