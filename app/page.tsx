import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { ToolboxSection } from '@/components/home/toolbox-section';
import { ValueProps } from '@/components/home/value-props';
import { CoursesOverview } from '@/components/home/courses-overview';
import { SocialProof } from '@/components/home/social-proof';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { ContactForm } from '@/components/contact/contact-form';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ToolboxSection />
        <ValueProps />
        <CoursesOverview />
        <SocialProof />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
