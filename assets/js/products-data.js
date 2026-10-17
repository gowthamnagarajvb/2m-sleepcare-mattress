/**
 * 2M SleepCare Mattress - Official Product Catalog Data
 * Authentic specifications extracted from 2M SleepCare Product Catalog
 */

const PRODUCTS_DATA = [
  {
    id: "bonnell-elegant-6",
    name: "2M Bonnell Spring Elegant",
    series: "Bonnell Springs",
    category: "spring",
    thickness: "6 Inch",
    tagline: "Superior Back Support with Fire Retardant Fabric",
    price: 12499,
    originalPrice: 15999,
    rating: 4.8,
    reviewsCount: 38,
    badge: "Popular",
    warranty: "5 Years Warranty",
    image: "assets/images/products/bonnell-elegant.jpg",
    description: "2M SleepCare Bonnell Spring Elegant provides superior back support and outstanding pressure relief by gently conforming to body contours. Crafted with cross-wire helicals and fire-retardant fabric for complete peace of mind.",
    features: [
      "Knotted round-top hourglass Bonnell innerspring unit",
      "Fire-retardant breathable fabric",
      "Superior back support for refreshing sleep",
      "Balanced body support with plush comfort layers"
    ],
    insideFact: [
      "Quilted Fire-Retardant Fabric",
      "High Resilient Comfort Foam Layer",
      "Hourglass Knotted Bonnell Steel Springs",
      "Cross-Wire Helical Stabilizers",
      "Heavy Duty Base Insulation Felt"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "bonnell-premium-8",
    name: "2M Bonnell Spring Premium",
    series: "Bonnell Springs",
    category: "spring",
    thickness: "8 Inch",
    tagline: "Luxurious Cushioning with Heavy-Duty Steel Springs",
    price: 16999,
    originalPrice: 21999,
    rating: 4.9,
    reviewsCount: 46,
    badge: "Best Seller",
    warranty: "7 Years Warranty",
    image: "assets/images/products/bonnell-premium.jpg",
    description: "Built for supreme longevity and deep spinal comfort. Features high-gauge Bonnell units combined with unique plush latex and foam comfort layers for a luxury hotel-grade sleep experience.",
    features: [
      "Heavy-duty Bonnell spring core",
      "Plush latex and high density foam layers",
      "Reinforced border wire to prevent edge sagging",
      "Optimum quality raw materials for maximum durability"
    ],
    insideFact: [
      "Imported Knitted Quilted Fabric",
      "Plush Natural Latex & Foam Layer",
      "High Tensile Hourglass Bonnell Coils",
      "Cross Wire Helical Interlocking",
      "Reinforced Perimeter Edge Support"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "pocket-pristine-6",
    name: "2M Pocket Spring Pristine",
    series: "Pocket Springs",
    category: "pocket",
    thickness: "6 Inch",
    tagline: "Zero Motion Transfer & Independent Contour Support",
    price: 18499,
    originalPrice: 24999,
    rating: 4.9,
    reviewsCount: 52,
    badge: "Zero Disturbance",
    warranty: "10 Years Warranty",
    image: "assets/images/products/pocket-platino.jpg",
    description: "Hundreds of independent pocket springs individually react to your posture. Ideal for couples, eliminating partner disturbance and roll-together effect with foam-encased edge protection.",
    features: [
      "Hundreds of individually pocketed steel coils",
      "Eliminates partner roll-together effect",
      "Exclusive edge wire & foam encased technology",
      "Covered in high quality imported quilted fabric"
    ],
    insideFact: [
      "High Quality Imported Quilted Fabric Cover",
      "Additional Soft Foam Layer for Cushioning",
      "Independently Pocketed Springs Core",
      "Edge Wire & Foam Encasing Technology",
      "Anti-Sag High Density Base"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "pocket-platino-8",
    name: "2M Platino Healthy Spine Spring",
    series: "Pocket Springs",
    category: "pocket",
    thickness: "8 Inch",
    tagline: "Gel-Infused Natural Latex with Independent Pocket Springs",
    price: 24999,
    originalPrice: 32999,
    rating: 5.0,
    reviewsCount: 64,
    badge: "Flagship Luxury",
    warranty: "10 Years Warranty",
    image: "assets/images/products/pocket-platino.jpg",
    description: "The ultimate sleeping experience combining cooling Gel-Infused Latex Foam with multi-zone pocket springs. Naturally hypoallergenic, dust-mite resistant, and engineered to support tired spines.",
    features: [
      "Gel-Infused Latex Foam for optimal thermal regulation",
      "Naturally cooler open-cell structure",
      "Self-quilted antibacterial and dust mite resistant fabric",
      "Ergonomic spinal alignment for energetic mornings"
    ],
    insideFact: [
      "Imported Self-Quilted Knitted Cloth",
      "Gel-Infused Natural Latex Foam Layer",
      "High Resilience PU Transition Layer",
      "Independently Sealed Pocketed Springs",
      "Foam Encased Perimeter Support"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "ortho-spring-orthocar-6",
    name: "2M Orthocar Ortho Spring",
    series: "Ortho Springs",
    category: "ortho",
    thickness: "6 Inch",
    tagline: "Medical-Grade Joint and Back Pain Relief",
    price: 15499,
    originalPrice: 19999,
    rating: 4.9,
    reviewsCount: 71,
    badge: "Doctor Recommended",
    warranty: "7 Years Warranty",
    image: "assets/images/products/ortho-spring.jpg",
    description: "Designed specifically to support back and joints, helping medical patients and people suffering from joint and lumbar pain regain sound, restorative sleep and proper posture alignment.",
    features: [
      "Orthopedic spinal contouring",
      "Proven relief for backache and cervical stiffness",
      "Internal body support reinforcement",
      "Anti-allergic treated fabric"
    ],
    insideFact: [
      "Multi-Layered Knitted Quilted Fabric",
      "Firm Orthopedic PU Foam Layer",
      "Posturized Ortho Spring Core",
      "Spine Care Boundary Encasement",
      "Anti-Bacterial Breathable Base"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "nishanth-standard-4-5",
    name: "Nishanth Standard & Deluxe",
    series: "Nishanth Series",
    category: "coir",
    thickness: "4\" Standard & 5\" Deluxe",
    tagline: "Natural Rubberised Coir with Polymer Sandwich",
    price: 7999,
    originalPrice: 10499,
    rating: 4.7,
    reviewsCount: 89,
    badge: "Value Favorite",
    warranty: "5 Years Warranty",
    image: "assets/images/products/nishanth-standard.jpg",
    description: "A natural rubberised coir base with polymer sandwich for durable, budget-friendly orthopedic support. Features superior foam quilt in an attractive maroon quilted fabric.",
    features: [
      "Natural rubberised coir base with EP sandwich",
      "Attractive maroon quilted fabric",
      "Firm back support at an affordable price",
      "Available in Standard 4\" and Deluxe 5\""
    ],
    insideFact: [
      "PCM Cloth Quilt Fabric",
      "Natural Rubberised Coir Layer",
      "EP Polymer Sandwich Support Core",
      "Natural Rubberised Coir Layer",
      "Durable Base Fabric"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "niha-comfort-4",
    name: "Niha Comfort",
    series: "Niha Series",
    category: "coir",
    thickness: "4 Inch",
    tagline: "Rubberised Coir with Center PU Foam Softie Layer",
    price: 8999,
    originalPrice: 11999,
    rating: 4.8,
    reviewsCount: 42,
    badge: "Dual Comfort",
    warranty: "5 Years Warranty",
    image: "assets/images/products/nishanth-standard.jpg",
    description: "Combination of rubberised coir base with PU foam in the center for a softie surface feeling. Finished with premium quality poly-cotton quilt for gentle, breathable cushioning.",
    features: [
      "Rubberised coir with center PU foam",
      "Poly-cotton fabric quilt on top",
      "Firm base with soft surface touch",
      "Ideal for all sleeping positions"
    ],
    insideFact: [
      "Poly-Cotton Quilt Fabric",
      "Natural Rubberised Coir Layer",
      "HD Softie PU Foam Core",
      "Natural Rubberised Coir Layer",
      "Durable Quilt Fabric"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "niha-ultra-5",
    name: "Niha Ultra Reversible",
    series: "Niha Series",
    category: "coir",
    thickness: "5 Inch Plus",
    tagline: "Double-Sided Use with 32D High-Density PU Foam",
    price: 11499,
    originalPrice: 14999,
    rating: 4.8,
    reviewsCount: 36,
    badge: "Reversible",
    warranty: "7 Years Warranty",
    image: "assets/images/products/nishanth-standard.jpg",
    description: "Double the lifespan with dual-sided sleeping usability. Features natural rubberised coir sandwiched between two 32D high-density PU foam layers with multi-layered quilted covers on both sides.",
    features: [
      "Reversible double-sided design for extended life",
      "Dual 32D high density foam comfort zones",
      "Multi-layered PU foam quilt on both sides",
      "Available in 5\" Plus thickness"
    ],
    insideFact: [
      "Quilted Poly Cotton Fabric (Side 1)",
      "32D High-Density PU Foam",
      "Rubberised Coir Center Core",
      "32D High-Density PU Foam",
      "Quilted Poly Cotton Fabric (Side 2)"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "supreem-regal-6",
    name: "2M Supreem Regal",
    series: "2M Supreem",
    category: "coir",
    thickness: "6 Inch",
    tagline: "Natural Rubber Latex Coated Coir with Reversible PCM Quilt",
    price: 14999,
    originalPrice: 19499,
    rating: 4.9,
    reviewsCount: 45,
    badge: "Premium Choice",
    warranty: "7 Years Warranty",
    image: "assets/images/products/supreem-regal.jpg",
    description: "Premium mattress rich in quality finish and comfort. High-density coir block coated with natural rubber latex and 32D PU foam on both sides gives body required spine support.",
    features: [
      "100% natural rubber latex coated coir block",
      "32 Density PU foam on both sides",
      "Double-sided superior PCM quilt cover",
      "Reversible two-sided comfort"
    ],
    insideFact: [
      "Superior PCM Cloth Quilt Fabric",
      "32D High-Density PU Foam",
      "Natural Rubber Latex Coated Coir Block (RC)",
      "32D High-Density PU Foam",
      "Superior PCM Cloth Quilt Fabric"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "supreem-royal-8",
    name: "2M Supreem Royal",
    series: "2M Supreem",
    category: "coir",
    thickness: "8 Inch",
    tagline: "Sandwiched 40D Foam & 100% Latex Coated Coir Base",
    price: 21999,
    originalPrice: 28999,
    rating: 4.9,
    reviewsCount: 57,
    badge: "Luxury Sandwich",
    warranty: "10 Years Warranty",
    image: "assets/images/products/supreem-regal.jpg",
    description: "An exquisite experience crafted with 40D high-density PU foam on both sides, sandwiched between a 100% natural latex coated coir base. Covered in superior Poly Viscose Tapestry for silken feel.",
    features: [
      "40D High Density PU foam on both sides",
      "100% natural latex coated high density coir base",
      "Superior Poly Viscose Tapestry on both sides",
      "Reversible double-sided luxury"
    ],
    insideFact: [
      "Viscose Quilt Fabric",
      "40D High-Density PU Foam Layer",
      "100% Natural Latex Coated Coir Base",
      "40D High-Density PU Foam Layer",
      "Viscose Quilt Fabric"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "supreem-royal-plus-8",
    name: "2M Supreem Royal Plus",
    series: "2M Supreem",
    category: "coir",
    thickness: "8 Inch Plus",
    tagline: "Ultra-Premium Memory Foam + 40D PU Foam + International Coir",
    price: 27999,
    originalPrice: 36999,
    rating: 5.0,
    reviewsCount: 68,
    badge: "Ultimate Royal",
    warranty: "10 Years Warranty",
    image: "assets/images/products/supreem-regal.jpg",
    description: "The crown jewel of sandwich mattresses. Features an international standard high-density coir core, multi-layers of extra high density memory foam on top, and 40D PU foam on bottom.",
    features: [
      "Extra high-density memory foam padding on top",
      "International standard high density coir base in center",
      "40D PU foam foundation on bottom",
      "Specially treated knitted fabric tapestry"
    ],
    insideFact: [
      "Specially Treated Knitted Quilt Fabric",
      "Extra High Density Memory Foam Padding",
      "International Standard HD Coir Base",
      "40D High Density PU Foam Layer",
      "Multilayered Knitted Quilt Base"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "flexi-puf-steffi-4",
    name: "2M Flexi PUF Steffi",
    series: "2M Flexi PUF",
    category: "puf",
    thickness: "4 Inch",
    tagline: "100% Pure PU Foam with Single Side Stylish Quilt",
    price: 6499,
    originalPrice: 8999,
    rating: 4.7,
    reviewsCount: 31,
    badge: "Budget Hero",
    warranty: "5 Years Warranty",
    image: "assets/images/products/flexi-puf-steffi.jpg",
    description: "100% PU foam mattress providing steady support and light weight. Inherent cellular structure allows cell walls to compress and decompress smoothly to body contours.",
    features: [
      "100% pure PU foam with single side stylish quilt",
      "Light in weight and very easy to handle",
      "Contours naturally to your posture",
      "Highly economical with dependable firmness"
    ],
    insideFact: [
      "PCM Cloth Quilt Fabric",
      "28D High Density PU Foam Core",
      "Durable Under-Cloth Fabric"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "flexi-puf-softee-5",
    name: "2M Flexi PUF Softee",
    series: "2M Flexi PUF",
    category: "puf",
    thickness: "5 Inch",
    tagline: "Double-Sided Viscose Quilt with 32D Super Softee PUF",
    price: 9999,
    originalPrice: 13499,
    rating: 4.8,
    reviewsCount: 39,
    badge: "Super Softee",
    warranty: "7 Years Warranty",
    image: "assets/images/products/flexi-puf-steffi.jpg",
    description: "Engineered for sleepers who prefer extra foam plushness. Contains 32D Super Softee PU foam wrapped in multi-layered viscose fabric quilt on both sides for reversible use.",
    features: [
      "32D Super Softee PU foam core",
      "Multi-layered viscose fabric quilt on both sides",
      "Reversible double-sided usability",
      "Silken comfort touch"
    ],
    insideFact: [
      "Viscose Quilt Fabric",
      "32D High Density PUF Super Softee Core",
      "Viscose Quilt Fabric"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "selesta-prince-8",
    name: "2M Selesta Prince Memory Foam",
    series: "Selesta High PUFs",
    category: "puf",
    thickness: "8 Inch",
    tagline: "2\" Memory Gem Foam + 5\" 50 HD Base with Brown Suede Trim",
    price: 23499,
    originalPrice: 31000,
    rating: 5.0,
    reviewsCount: 78,
    badge: "10 Years Warranty",
    warranty: "10 Years Warranty",
    image: "assets/images/products/selesta-prince.jpg",
    description: "High-quality 3-layer construction featuring a top layer of 2\" Memory Gem Foam that moulds to the body and a 5\" 50 HD foam base. Finished in washable knitted fabric and brown suede side panels.",
    features: [
      "Top layer 2-inch Memory Gem Foam",
      "5-inch 50 HD Foam optimal base support",
      "Washable knitted fabric with luxurious brown suede borders",
      "100% guaranteed with 10-Year Warranty"
    ],
    insideFact: [
      "Knitted Fabric All Round Quilt",
      "2-inch Memory Gem Foam Contouring Layer",
      "5-inch 50 HD High Density Foam Base",
      "Knitted Fabric & Brown Suede All Round"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "selesta-gold-plus-6",
    name: "2M Selesta Gold Plus",
    series: "Selesta High PUFs",
    category: "puf",
    thickness: "6 Inch",
    tagline: "40 HD PU Foam Core with Silken Viscose Quilting",
    price: 17999,
    originalPrice: 23500,
    rating: 4.9,
    reviewsCount: 51,
    badge: "Certified Ergonomic",
    warranty: "10 Years Warranty",
    image: "assets/images/products/selesta-gold.jpg",
    description: "Combines sleep science and luxury materials. Double-sided viscose quilting adds a silken plush feel over a heavy-duty 40 HD PU foam base. Reversible and certified with a 10-year warranty.",
    features: [
      "40 HD PU Foam base ensures ergonomic alignment",
      "Double-sided viscose quilting for silken touch",
      "Reversible design doubles mattress life",
      "100% guaranteed with 10-Year Warranty"
    ],
    insideFact: [
      "Viscose Cloth Quilt All Round",
      "40 HD Ergonomic PU Foam Core",
      "Viscose Cloth Quilt All Round"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  },
  {
    id: "orthocare-6-flagship",
    name: "2M Orthocare Flagship Mattress",
    series: "2M Orthocare",
    category: "ortho",
    thickness: "6 Inch",
    tagline: "4\" HD Firm Foam + 2\" Pure Natural Latex + Spine Care RC",
    price: 22999,
    originalPrice: 29999,
    rating: 5.0,
    reviewsCount: 94,
    badge: "Top Orthopedic Choice",
    warranty: "10 Years Warranty",
    image: "assets/images/products/orthocare-6.jpg",
    description: "The gold standard for spinal health. Engineered with a firm 4\" high density foam base, 2\" natural pure latex, and Spine Care Rubberised Coir. Multilayered knitted fabric quilt on both sides gives unmatched durability.",
    features: [
      "4-inch firm high density foam for rigid postural support",
      "2-inch 100% natural pure latex for contouring comfort",
      "Spine Care RC layer for active lumbar protection",
      "Multilayered knitted fabric quilt on both sides"
    ],
    insideFact: [
      "Single Side PCM Quilted Fabric",
      "2-inch 100% Natural Pure Latex Layer",
      "Spine Care RC (Rubberised Coir) Layer",
      "4-inch High Density Firm Foam Support Base",
      "PCM Breathable Base Fabric"
    ],
    sizes: ["Single (72x36)", "Queen (72x60)", "King (72x72)", "Custom Size"]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = PRODUCTS_DATA;
}
