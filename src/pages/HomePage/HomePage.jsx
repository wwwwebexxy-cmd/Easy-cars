import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaCar,
  FaCheck,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileAlt,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShip,
  FaTools,
  FaTruck,
  FaWhatsapp,
} from 'react-icons/fa';
import useSeo from '../../hooks/useSeo';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  FAQ_ITEMS,
  MAP_URL,
  SITE_URL,
} from '../../seo/siteSeo';
import './HomePage.css';

const WHATSAPP_NUMBER = '971523048009';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const heroSlides = [
  {
    id: 'auction',
    image: '/assets/easycars-auction-generated.webp',
    alt: 'Vehicle auction yard in the USA',
    step: 'Auction yard',
    title: 'Your dream car',
    accent: 'starts here.',
    description: 'Choose from thousands of vehicles being auctioned across the USA.',
  },
  {
    id: 'shipping',
    image: '/assets/easycars-shipping-generated.webp',
    alt: 'Vehicle shipping from America to the UAE',
    step: 'Shipping',
    title: 'From America',
    accent: 'to the UAE.',
    description: 'We coordinate the journey across borders and oceans, end to end.',
  },
  {
    id: 'repairs',
    image: '/assets/easycars-repairs-generated.webp',
    alt: 'Vehicle repairs and preparation before delivery',
    step: 'Repairs',
    title: 'Handled from',
    accent: 'start to finish.',
    description: 'Repairs, spare parts, customs and trucking - managed by one team.',
  },
  {
    id: 'delivery',
    image: '/assets/easycars-delivery-generated.webp',
    alt: 'Imported vehicle delivered to a UAE customer',
    step: 'Delivery',
    title: 'Delivered to',
    accent: 'your door.',
    description: 'The car you wanted, brought home to you in the UAE.',
  },
];

const processSteps = [
  { icon: <FaCar />, image: '/assets/easycars-process-auction.webp', imageAlt: 'Vehicle auction yard', title: 'Choose your vehicle', text: 'Tell us the brand, model and vehicle you have in mind.' },
  { icon: <FaFileAlt />, image: '/assets/easycars-process-budget.webp', imageAlt: 'EasyCars vehicle budget consultation', title: 'Set your budget', text: 'You decide the maximum amount you are comfortable bidding.' },
  { icon: <FaCheck />, image: '/assets/easycars-process-bidding.webp', imageAlt: 'EasyCars professional auction bidding', title: 'We handle the bid', text: 'We guide you through the auction and bidding procedures.' },
  { icon: <FaTruck />, image: '/assets/easycars-process-transport.webp', imageAlt: 'Vehicle transportation from the USA', title: 'USA transportation', text: 'Your vehicle is collected and moved from the auction yard.' },
  { icon: <FaShip />, image: '/assets/easycars-process-shipping.webp', imageAlt: 'Vehicle shipping and customs', title: 'Shipping and customs', text: 'We coordinate shipping and customs clearance into the UAE.' },
  { icon: <FaTools />, image: '/assets/easycars-process-repairs.webp', imageAlt: 'Vehicle repairs and spare parts', title: 'Repairs and parts', text: 'Repair it with us or deliver it to a garage of your choice.' },
  { icon: <FaCar />, image: '/assets/easycars-process-delivery.webp', imageAlt: 'Vehicle delivered to a UAE home', title: 'Delivered to your door', text: 'Your imported vehicle arrives ready for the next drive.' },
];

const serviceDetails = [
  'Bidding and auction procedures',
  'Paperwork',
  'USA transportation',
  'Shipping',
  'Customs clearance',
  'UAE trucking',
  'Repairs and spare parts',
];

const contactCards = [
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+971 52 304 8009',
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Mobile',
    value: '+971 52 935 9279',
    href: 'tel:+971529359279',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Office location',
    value: 'Sharjah, UAE',
    href: MAP_URL,
    external: true,
  },
  {
    icon: <FaInstagram />,
    label: 'Instagram',
    value: '@syamraktrv',
    href: 'https://www.instagram.com/syamraktrv',
    external: true,
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'easycarsimport@gmail.com',
    href: 'mailto:easycarsimport@gmail.com',
  },
];

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [enquirySent, setEnquirySent] = useState(false);

  useSeo({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonicalUrl: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, []);

  const handleEnquirySubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      'Hello EasyCars, I would like to enquire about a vehicle.',
      `Car make and model: ${data.get('makeModel')}`,
      `Vehicle budget: ${data.get('budget')}`,
      `Name: ${data.get('name')}`,
      `WhatsApp / contact number: ${data.get('contact')}`,
    ].join('\n');

    form.reset();
    window.location.href = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    setEnquirySent(true);
    window.setTimeout(() => setEnquirySent(false), 4500);
  };

  return (
    <div className="easycars-page" id="top">
      <section className="hero" aria-label="EasyCars import journey">
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <article className={`hero-slide ${index === activeSlide ? 'hero-slide--active' : ''}`} key={slide.id} aria-hidden={index !== activeSlide}>
              <img src={slide.image} alt={slide.alt} className="hero-slide-image" />
              <div className="hero-slide-shade" />
            </article>
          ))}
        </div>

        <div className="hero-grid" />
        <div className="hero-content container">
          <p className="hero-kicker"><span className="hero-kicker-line" /> EasyCars Auto Trading LLC</p>
          <p className="hero-step">{heroSlides[activeSlide].step}</p>
          <h1>{heroSlides[activeSlide].title}<br /><em>{heroSlides[activeSlide].accent}</em></h1>
          <p className="hero-description">{heroSlides[activeSlide].description}</p>
          <div className="hero-actions">
            <a className="button button--red" href="#enquiry">Start your enquiry <FaArrowRight /></a>
            <a className="button button--ghost" href="#process">How it works</a>
          </div>
        </div>

        <div className="hero-bottom container">
          <p>AUCTION <span>/</span> IMPORT <span>/</span> REPAIR <span>/</span> DRIVE</p>
          <div className="hero-dots" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.id}
                className={index === activeSlide ? 'is-active' : ''}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.step}`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="partner-strip" aria-label="Auction marketplace partners">
        <div className="container partner-inner">
          <p>Access to the world's leading auction platforms</p>
          <div className="partner-logos">
            <img src="/assets/partner-copart.webp" alt="Copart" />
            <img src="/assets/partner-iaa.webp" alt="IAA" />
            <img src="/assets/partner-manheim.webp" alt="Manheim" />
          </div>
        </div>
      </section>

      <section className="content-section about-section" id="about">
        <div className="container about-grid">
          <div className="section-intro">
            <p className="eyebrow">About us</p>
            <h2>Your dream car.<br /><span>Our mission.</span></h2>
          </div>
          <div className="about-copy">
            <p className="lead-copy">At EasyCars Auto Trading LLC, we believe that owning your dream car should never feel impossible.</p>
            <p>There are countless vehicles around the world that people dream about owning - cars that may be rare, unavailable, difficult to find, or simply too complicated to bring into the UAE.</p>
            <p>We exist to change that. If the car exists, we believe there is a way to bring it to you. Our goal is simple: make your dream car achievable and make the entire process as easy as possible.</p>
            <a className="text-link" href="#enquiry">Tell us what you want <FaArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="content-section process-section" id="process">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Import process</p>
              <h2>From an auction yard<br /><span>to your home.</span></h2>
            </div>
            <p className="section-heading-copy">We manage the journey from start to finish, giving you one team for every step between the USA and the UAE.</p>
          </div>

          <div className="process-layout">
            <div className="process-list">
              {processSteps.map((step) => (
                <div className="process-card" key={step.title}>
                  <img className="process-card-image" src={step.image} alt={step.imageAlt} />
                  <div className="process-card-body">
                    <span className="process-icon">{step.icon}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="process-summary">
              <p className="summary-label">We take care of everything that follows</p>
              <ul>
                {serviceDetails.map((item) => <li key={item}><FaCheck /> {item}</li>)}
              </ul>
              <p className="summary-note">Whether you want to repair the vehicle at one of our own facilities or have it delivered directly to a garage of your choice, we make it happen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="statement-section mission-section" id="mission">
        <div className="statement-image statement-image--repairs" style={{ backgroundImage: "url('/assets/easycars-repairs-generated.webp')" }} role="img" aria-label="Vehicle repairs and preparation" />
        <div className="container statement-content">
          <p className="eyebrow">Company mission</p>
          <h2>Your dream matters<br /><span>to us.</span></h2>
          <p>For us, this isn't just about moving cars from one country to another. It's about the moment you finally see the car you've always wanted sitting in your garage.</p>
          <p>We understand that a dream car can mean years of saving, planning, researching and waiting. That's why we treat every vehicle as more than just another transaction. It is someone's dream, and we take that personally.</p>
        </div>
      </section>

      <section className="content-section vision-section" id="vision">
        <div className="container vision-grid">
          <div className="vision-card vision-card--dark">
            <p className="eyebrow">Company vision</p>
            <h2>Make every<br /><span>dream car possible.</span></h2>
            <p>Our vision is to make dream-car ownership accessible, straightforward and achievable. We remove the complexity from international vehicle sourcing and importing by handling the entire process under one roof.</p>
          </div>
          <div className="vision-card vision-card--red">
            <p className="quote-mark">“</p>
            <p className="vision-quote">We want our customers to stop saying: <strong>I wish I could own that car.</strong> And start saying: <strong>How do we get it here?</strong></p>
          </div>
        </div>
      </section>

      <section className="content-section faq-section" id="faq" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div className="faq-intro">
            <p className="eyebrow">Frequently asked questions</p>
            <h2 id="faq-title">Clear answers.<br /><span>One simple journey.</span></h2>
            <p>Learn how EasyCars helps you move from a USA auction search to vehicle delivery in the UAE.</p>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="statement-section promise-section" id="promise">
        <div className="statement-image statement-image--delivery" style={{ backgroundImage: "url('/assets/easycars-delivery-generated.webp')" }} role="img" aria-label="Imported vehicle delivered to a UAE customer" />
        <div className="container statement-content statement-content--right">
          <p className="eyebrow">Company promise</p>
          <h2>You dream it.<br /><span>We bring it home.</span></h2>
          <p>You don't need to know how international auctions work. You don't need to arrange American trucking, figure out shipping, navigate customs, search for spare parts, or coordinate multiple garages.</p>
          <p className="promise-line">All you need to do is tell us: <strong>This is the car I want.</strong></p>
        </div>
      </section>

      <section className="content-section enquiry-section" id="enquiry">
        <div className="container enquiry-grid">
          <div className="enquiry-intro">
            <p className="eyebrow">Enquiry form</p>
            <h2>Tell us about<br /><span>your next car.</span></h2>
            <p>Share the basics and we will start looking for the right vehicle. Your enquiry opens WhatsApp with the details ready to send to our team.</p>
            <a className="direct-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><FaWhatsapp /> Chat directly on WhatsApp</a>
          </div>
          <form className="enquiry-form" onSubmit={handleEnquirySubmit}>
            <label>
              <span>Car make and model</span>
              <input type="text" name="makeModel" placeholder="e.g. 2022 Nissan GT-R" required />
            </label>
            <label>
              <span>Vehicle budget</span>
              <input type="text" name="budget" placeholder="e.g. AED 180,000" required />
            </label>
            <div className="form-row">
              <label>
                <span>Your name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>WhatsApp / contact</span>
                <input type="tel" name="contact" placeholder="+971 ..." required />
              </label>
            </div>
            <button className="button button--red form-submit" type="submit">
              {enquirySent ? 'WhatsApp enquiry ready' : 'Send enquiry'} <FaArrowRight />
            </button>
          </form>
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="container">
          <div className="contact-heading">
            <div>
              <p className="eyebrow">Contact us</p>
              <h2>Let's find<br /><span>your way home.</span></h2>
            </div>
            <a className="map-link" href={MAP_URL} target="_blank" rel="noreferrer">Open location in Google Maps <FaExternalLinkAlt /></a>
          </div>
          <div className="contact-grid">
            {contactCards.map((card) => (
              <a
                className="contact-card"
                href={card.href}
                key={card.label}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer' : undefined}
              >
                <span className="contact-icon">{card.icon}</span>
                <span className="contact-label">{card.label}</span>
                <strong>{card.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat with EasyCars on WhatsApp">
        <FaWhatsapp />
        <span>Chat with us</span>
      </a>
    </div>
  );
};

export default HomePage;
