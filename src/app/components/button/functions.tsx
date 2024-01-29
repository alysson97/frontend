export async function testeFunction(){
  const res = await fetch('http://localhost:8800/');
  return res.json();
}