import DisplaySorteio from "@/components/DisplaySorteio";

export default function Home() {
  return (
    <div className="container">
      <h1>Mega Sena</h1>
      <h2>Para começar informe a quantidade de bolas que devem estar entre 6 a 15</h2>
      <DisplaySorteio/>
    </div>
  );
}
