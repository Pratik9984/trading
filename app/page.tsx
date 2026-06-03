import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewsSection from './components/Newssection'
import TraderChecklist from './components/TraderChecklist'
import LiveChart from './components/LiveChart'
import AlertsSection from './components/Alertssection'
import CourseCurriculum from './components/CourseCurriculum'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import FadeInObserver from './components/Fadeinobserver'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow" style={{ paddingTop: '68px' }}>
        <Hero />
        <NewsSection />
        <TraderChecklist />
        <LiveChart />
        <AlertsSection />
        <CourseCurriculum />
        <CTASection />
      </main>

      <Footer />
      <FadeInObserver />
    </div>
  )
}

