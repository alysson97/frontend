import Head from "next/head";
import Link from "next/link";
import "./index.scss";


const Home = () => {

  return (
    <>
      <div className={"p-0 m-0"}>
        <Head>
          <title>Nunes Sports</title>
          <meta name="description" content="Deseafio Everymind" />
        </Head>

        <header className="bg-green-900 p-5">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/" className="text-white text-xl font-bold">
                  Nunes Esportes
                </Link>
              </div>
              <nav className="space-x-4">
                <Link href="/" className="text-white">
                  Home
                </Link>
                <Link href="#" className="text-white">
                  Produtos
                </Link>
                <Link href="#" className="text-white">
                  Contato
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* <h1 className="text-3xl font-bold mb-4">CRUD Operations</h1> */}


      </div>
    </>
  );
};

export default Home;
