import { Header } from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-[200vh] pt-32 px-10">
        <h1 className="text-4xl text-white">Dizajn z Figmy úspešne nahrávaný...</h1>
        <p className="text-gray-400 mt-4">Header by mal byť hore a fixnutý.</p>
      </div>
    </main>
  );
}