"use client";

import FlodeskForm from '../components/FlodeskForm';

const benefits = [
  ['01', 'Identify Your Marketing Problems', 'Understand where your current marketing may be losing potential customers.'],
  ['02', 'Know What to Improve First', 'Get clear priorities instead of trying different tactics without knowing what is working.'],
  ['03', 'Get a Customized Marketing Plan', 'Receive recommendations based on your business and current marketing situation.'],
  ['04', 'See Where AI Can Help', 'Understand where AI can improve your marketing, content, and follow-up.'],
  ['05', 'Leave With Clear Next Steps', 'Know what you should focus on next instead of guessing.'],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return <main>
    <header className="site-header"><img className="brand-logo" src="/ChatGPT_Image_Jul_31__2026__03_21_09_PM-removebg-preview.png" alt="Sajan Clicks" /></header>
    <section className="hero section-shell">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="hero-inner"><p className="eyebrow">FREE AI MARKETING CONSULTATION</p><h1>Find Where Your Business Is Losing <em>Customers Online</em></h1><p className="hero-copy">Get a <strong>free, customized AI Marketing Plan</strong> based on your business, current marketing, and the areas where you may be losing potential customers.</p><a className="button button-primary" href="#consultation">Get My Free AI Marketing Plan <Arrow /></a><p className="supporting">For small and medium business owners who are struggling to turn digital marketing into consistent sales.</p></div>
      <div className="scroll-cue"><span>↓</span> See what’s possible</div>
    </section>

    <section className="section-shell problem section-divider"><div className="section-intro"><p className="eyebrow">THE REAL QUESTION</p><h2>You don&apos;t need more random marketing tactics.</h2><p>You need to understand what is happening in your current marketing and what you should focus on first.</p></div><div className="problem-note"><span className="note-mark">“</span><p>Before you spend more on marketing, know what to fix.</p></div></section>

    <section className="section-shell benefits section-divider"><div className="section-intro"><p className="eyebrow">HOW THIS CONSULTATION CAN HELP</p><h2>Know what to fix before you spend more on marketing.</h2></div><div className="benefit-grid">{benefits.map(([number, title, text]) => <article className="benefit-card" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="section-shell process section-divider"><div className="section-intro"><p className="eyebrow">HOW IT WORKS</p><h2>Three simple steps to more clarity.</h2></div><div className="step-grid"><article><span>01</span><h3>Book Your Free Consultation</h3><p>Fill out the short form with your business information.</p></article><article><span>02</span><h3>One-to-One Consultation</h3><p>We discuss your business, your current marketing, and the challenges you are facing.</p></article><article><span>03</span><h3>Get Your Customized AI Marketing Plan</h3><p>You&apos;ll receive clear recommendations and a customized plan based on your business.</p></article></div></section>

    <section className="consultation section-shell" id="consultation"><div className="consultation-copy"><p className="eyebrow">BOOK YOUR CONSULTATION</p><h2>Get your free AI marketing plan.</h2><p className="large-copy">A direct conversation about your business and current marketing situation.</p><div className="mini-benefit"><span>✦</span><div><strong>Customized strategy for your business</strong><p>Get recommendations based on your business instead of generic marketing advice.</p></div></div></div><FlodeskForm /></section>

    <section className="final-cta section-shell"><p className="eyebrow">A CLEARER NEXT STEP</p><h2>Stop guessing.<br /><em>Start with a clear plan.</em></h2><p>Find out where your marketing may be losing customers and what you should focus on first.</p><a className="button button-light" href="#consultation">Get My Free AI Marketing Plan <Arrow /></a><p className="signature">Sajan Chhetri<br /><span>AI Marketing Expert &amp; Consultant</span></p></section>
    <footer className="footer"><img className="brand-logo footer-logo" src="/ChatGPT_Image_Jul_31__2026__03_21_09_PM-removebg-preview.png" alt="Sajan Clicks" /><p>Helping small and medium business owners use AI-powered marketing to attract, convert, and follow up with customers.</p></footer>
  </main>;
}
