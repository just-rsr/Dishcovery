import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Logo from './Logo';

const themes = [
  {
    name: 'pink',
    bg: '#ff4fa2',
    accent: '#ffb6e6',
    mainDish: '/main-dish.png',
    foodIcons: ['/food1.png', '/food2.png', '/food3.png', '/food4.png'],
    svg: 'pink',
  },
  {
    name: 'yellow',
    bg: '#f7e35b',
    accent: '#fff7b2',
    mainDish: '/food2.png',
    foodIcons: ['/food1.png', '/food2.png', '/food3.png', '/food4.png'],
    svg: 'yellow',
  },
  {
    name: 'orange',
    bg: '#ffb347',
    accent: '#ffe0b2',
    mainDish: '/food3.png',
    foodIcons: ['/food1.png', '/food2.png', '/food3.png', '/food4.png'],
    svg: 'orange',
  },
  {
    name: 'brown',
    bg: '#d08c60',
    accent: '#f3d6b6',
    mainDish: '/food4.png',
    foodIcons: ['/food1.png', '/food2.png', '/food3.png', '/food4.png'],
    svg: 'brown',
  },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How to use', href: '#how' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
];

const svgWaves = {
  pink: (
    <svg className="bg-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,100 Q200,200 400,100 T800,100 V600 H0 Z" fill="#fff" fillOpacity="0.18"/>
      <path d="M0,180 Q200,280 400,180 T800,180 V600 H0 Z" fill="#fff" fillOpacity="0.10"/>
    </svg>
  ),
  yellow: (
    <svg className="bg-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,120 Q200,220 400,120 T800,120 V600 H0 Z" fill="#fff" fillOpacity="0.18"/>
      <path d="M0,200 Q200,300 400,200 T800,200 V600 H0 Z" fill="#fff" fillOpacity="0.10"/>
    </svg>
  ),
  orange: (
    <svg className="bg-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,140 Q200,240 400,140 T800,140 V600 H0 Z" fill="#fff" fillOpacity="0.18"/>
      <path d="M0,220 Q200,320 400,220 T800,220 V600 H0 Z" fill="#fff" fillOpacity="0.10"/>
    </svg>
  ),
  brown: (
    <svg className="bg-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,160 Q200,260 400,160 T800,160 V600 H0 Z" fill="#fff" fillOpacity="0.18"/>
      <path d="M0,240 Q200,340 400,240 T800,240 V600 H0 Z" fill="#fff" fillOpacity="0.10"/>
    </svg>
  ),
};

function App() {
  const [themeIdx, setThemeIdx] = useState(0);
  const theme = themes[themeIdx];

  return (
    <motion.div
      className="main-bg"
      style={{ background: theme.bg }}
      initial={false}
      animate={{ background: theme.bg }}
      transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
    >
      {/* Animated SVG background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme.svg}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7 }}
          className="svg-bg-wrapper"
        >
          {svgWaves[theme.svg]}
        </motion.div>
      </AnimatePresence>
      <div className="glass-card">
        <header className="navbar">
          <div className="logo-section">
            <Logo className="logo" fillColor={theme.bg} />
            <span className="brand">Dishcovery</span>
          </div>
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <motion.button
            className="contact-btn"
            style={{ background: theme.accent, color: '#333' }}
            whileHover={{ scale: 1.08, boxShadow: `0 0 32px ${theme.accent}` }}
            whileTap={{ scale: 0.96 }}
          >
            Contact Us
          </motion.button>
      </header>
        <main className="hero-section">
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Dishcovery
            </motion.h1>
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Dishcovery – Turning "what's for dinner?" into "wow, that's dinner?!"<br/>
              An AI-powered recipe matchmaker that helps you cook what you love with what you have. No stress, just tasty success!
            </motion.p>
            <div className="food-icons">
              {theme.foodIcons.map((icon, idx) => (
                <motion.img
                  key={icon}
                  src={icon}
                  alt={`Food ${idx+1}`}
                  className={`food-icon${themeIdx === idx ? ' selected' : ''}`}
                  whileHover={{ scale: 1.18, rotate: -8, zIndex: 2 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -10, 0, 10, 0],
                    boxShadow: themeIdx === idx ? `0 8px 32px ${theme.accent}` : '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: idx * 0.2
                  }}
                  onClick={() => setThemeIdx(idx)}
                  style={{ borderColor: theme.accent, transition: 'border-color 0.4s' }}
                />
              ))}
            </div>
          </div>
          <div className="hero-image">
            <AnimatePresence mode="wait">
              <motion.img
                key={theme.mainDish}
                src={theme.mainDish}
                alt="Main Dish"
                className="main-dish-img"
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.7, type: 'spring' }}
                style={{ boxShadow: `0 4px 32px ${theme.accent}` }}
              />
            </AnimatePresence>
          </div>
        </main>
        <motion.section id="how" className="site-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="section-accent"></div>
          <h2 className="section-title">🍳 How to Use</h2>
          <ol className="section-list">
            <li>Enter the ingredients you have at home.</li>
            <li>Browse AI-recommended recipes tailored to your taste.</li>
            <li>Follow step-by-step instructions and enjoy your meal!</li>
          </ol>
        </motion.section>
        <motion.section id="services" className="site-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <div className="section-accent"></div>
          <h2 className="section-title">🛠️ Services</h2>
          <ul className="section-list">
            <li>AI-powered recipe recommendations</li>
            <li>Personalized meal planning</li>
            <li>Ingredient-based search</li>
            <li>Nutrition insights</li>
            <li>Save & share your favorite recipes</li>
          </ul>
        </motion.section>
        <motion.section id="about" className="site-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="section-accent"></div>
          <h2 className="section-title">👩‍🍳 About Us</h2>
          <p className="section-desc">Dishcovery is built by foodies and techies who believe everyone deserves a delicious, stress-free meal. Our AI helps you discover new dishes and make the most of what you have at home.</p>
        </motion.section>
        <motion.section id="contact" className="site-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <div className="section-accent"></div>
          <h2 className="section-title">📬 Contact Us</h2>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required className="contact-input" />
            <input type="email" placeholder="Your Email" required className="contact-input" />
            <textarea placeholder="Your Message" required className="contact-input" rows={4} />
            <motion.button type="submit" className="contact-btn" style={{ background: theme.accent, color: '#333', marginTop: '1rem' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>Send Message</motion.button>
          </form>
        </motion.section>
    </div>
    </motion.div>
  );
}

export default App;
