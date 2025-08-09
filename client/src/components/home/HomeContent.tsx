import HomeBanner from "./HomeBanner";

export default function HomeContent() {
  return (
    <div className="flex justify-center items-center">
      <div className="px-5">
        <HomeBanner />
        <section className="mt-10">
          <h2 className="text-xl">Jogos em Destaque</h2>
          <p>todos os jogos em destaque essa semana</p>
          <div></div>
        </section>
      </div>
    </div>
  );
}