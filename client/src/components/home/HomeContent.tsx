import HomeBanner from "./HomeBanner";
import CardsContainer from "../cards/CardsContainer";

export default function HomeContent() {
  return (
    <div className="flex justify-center items-center">
      <div className="px-5">
        <HomeBanner />
        <CardsContainer />
      </div>
    </div>
  );
}