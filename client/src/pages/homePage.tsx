import MainLayout from "@/layout/mainLayout";
import HomeContent from "@/components/home/HomeContent"
import HomeBanner from "@/components/home/HomeBanner"

export default function HomePage() {
  return (
    <MainLayout>
      <HomeBanner/>
      <HomeContent/>
    </MainLayout>
  )
}