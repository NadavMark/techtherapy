import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactForm } from '@/components/contact/contact-form';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
