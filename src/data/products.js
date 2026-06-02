import s1000 from '../assets/images/s1000orig.png';
import elite from '../assets/images/eliteorig.jpg';
import micron from '../assets/images/micronaloneorig01.png';

export const products = [
  {
    slug: 'stealth-pro',
    name: 'Stealth Pro',
    eyebrow: 'Countertop system',
    price: 4350,
    image: s1000,
    imageAlt: 'Stealth Pro countertop water system',
    summary: 'The full Stealth experience in a countertop system designed for daily use.',
    description:
      'Stealth Pro brings multi-stage filtration, mineral-balanced output, and live quality visibility into one countertop system. It is the direct path for homes that want Stealth performance without an under-counter installation.',
    badge: 'Most direct setup',
    features: [
      'Countertop installation path',
      'Multi-stage Stealth filtration',
      'Mineral-balanced drinking water',
      'Live output and filter visibility',
      'Built for drinking, cooking, and refills',
      'Guided setup and product support',
    ],
    specs: [
      ['Placement', 'Countertop'],
      ['Daily capacity', 'Up to 50 gallons'],
      ['Installation', 'Direct setup path'],
      ['Support', 'Guided product support'],
    ],
  },
  {
    slug: 'stealth-elite',
    name: 'Stealth Elite',
    eyebrow: 'Under-counter system',
    price: 5345,
    image: elite,
    imageAlt: 'Stealth Elite under-counter water system',
    summary: 'An integrated Stealth system for a clean counter line and a permanent kitchen setup.',
    description:
      'Stealth Elite moves the system below the counter while keeping the Stealth water profile at the center of the kitchen. It is designed for homes that want a premium built-in installation and a clear, finished countertop.',
    badge: 'Integrated setup',
    features: [
      'Under-counter installation',
      'Integrated kitchen profile',
      'Advanced filtration path',
      'Mineral-balanced drinking water',
      'Clean countertop presentation',
      'Premium product support',
    ],
    specs: [
      ['Placement', 'Under counter'],
      ['Profile', 'Integrated kitchen'],
      ['Installation', 'Built-in setup path'],
      ['Support', 'Premium product support'],
    ],
  },
  {
    slug: 'full-micron',
    name: 'Full Micron',
    eyebrow: 'Filtration add-on',
    price: 600,
    image: micron,
    imageAlt: 'Full Micron filtration unit',
    summary: 'A compact upgrade that adds another focused polishing layer to your source water.',
    description:
      'Full Micron is the focused filtration add-on for homes that want another level of source-water polish. Its compact profile and simple replacement path make it a practical upgrade alongside a Stealth system.',
    badge: 'Add-on upgrade',
    features: [
      'Focused micron filtration',
      'Compact add-on profile',
      'Additional source-water polish',
      'Simple replacement path',
      'Pairs with a Stealth system',
      'Support for fit and setup',
    ],
    specs: [
      ['Type', 'Filtration add-on'],
      ['Profile', 'Compact'],
      ['Purpose', 'Source-water polishing'],
      ['Support', 'Fit and setup guidance'],
    ],
  },
];
