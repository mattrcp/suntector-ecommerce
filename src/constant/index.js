import {
  avatar1,
  avatar2,
  avatar3,
  p2d1,
  p2d2,
  p2d3,
  p2d4,
  p1d1,
  p1d2,
  p1d3,
  p1d4,
  p3d1,
  p3d2,
  p3d3,
  p3d4,
  p4d1,
  p4d2,
  p4d3,
  p4d4,
} from "../assets/index.js";

const products = [
  {
    id: 1,
    name: "Polaris Aviator",
    description:
      "Classic aviator sunglasses with polarized lenses for superior glare reduction and style.",
    price: 49.99,
    model: "Polaris Aviator 2024",
    material: "Metal frame with polycarbonate lenses",
    gender: "Unisex",
    frame_material: "Metal",
    face_shape: "Round, Oval",
    image: {
      firstImage: p1d1,
      secondImage: p1d2,
      thirdImage: p1d3,
      fourthImage: p1d4,
    },
  },

  {
    id: 2,
    name: "SportShield Pro",
    description:
      "Sleek sports sunglasses designed for performance and durability in outdoor activities.",
    price: 59.99,
    model: "SportShield Pro 5000",
    material: "TR90 frame with shatterproof polycarbonate lenses",
    gender: "Unisex",
    frame_material: "TR90",
    face_shape: "Square, Heart",
    image: {
      firstImage: p2d1,
      secondImage: p2d2,
      thirdImage: p2d3,
      fourthImage: p2d4,
    },
  },
  {
    id: 3,
    name: "Retro Chic Cat Eye",
    description:
      "Fashion-forward cat-eye sunglasses with a retro vibe, perfect for adding flair to any outfit.",
    price: 39.99,
    model: "Retro Chic Cat Eye 2024",
    material: "Acetate frame with gradient lenses",
    gender: "Female",
    frame_material: "Acetate",
    face_shape: "Heart, Diamond",
    image: {
      firstImage: p3d1,
      secondImage: p3d2,
      thirdImage: p3d3,
      fourthImage: p3d4,
    },
  },
  {
    id: 4,
    name: "Navigator Classic",
    description:
      "Timeless navigator-style sunglasses with a bold silhouette and versatile design.",
    price: 44.99,
    model: "Navigator Classic 2024",
    material: "Metal frame with mirrored lenses",
    gender: "Male",
    frame_material: "Metal",
    face_shape: "Oval, Square",
    image: {
      firstImage: p4d1,
      secondImage: p4d2,
      thirdImage: p4d3,
      fourthImage: p4d4,
    },
  },
  {
    id: 5,
    name: "Urban Wayfarer",
    description:
      "Modern wayfarer sunglasses with a sleek urban edge, suitable for everyday wear.",
    price: 34.99,
    model: "Urban Wayfarer 2024",
    material: "Plastic frame with tinted lenses",
    gender: "Unisex",
    frame_material: "Plastic",
    face_shape: "Round, Oval",
    image: {
      firstImage: p1d1,
      secondImage: p1d2,
      thirdImage: p1d3,
      fourthImage: p1d4,
    },
  },
  {
    id: 6,
    name: "Shielded Wraparound",
    description:
      "Wraparound sunglasses offering maximum coverage and protection for outdoor enthusiasts.",
    price: 54.99,
    model: "Shielded Wraparound 2024",
    material: "TR90 frame with polarized lenses",
    gender: "Unisex",
    frame_material: "TR90",
    face_shape: "Square, Oval",
    image: {
      firstImage: p2d1,
      secondImage: p2d2,
      thirdImage: p2d3,
      fourthImage: p2d4,
    },
  },
  {
    id: 7,
    name: "Elegance Square",
    description:
      "Square-shaped sunglasses exuding elegance and sophistication, ideal for formal occasions.",
    price: 49.99,
    model: "Elegance Square 2024",
    material: "Metal frame with gradient lenses",
    gender: "Female",
    frame_material: "Metal",
    face_shape: "Round, Oval",
    image: {
      firstImage: p3d1,
      secondImage: p3d2,
      thirdImage: p3d3,
      fourthImage: p3d4,
    },
  },
  {
    id: 8,
    name: "Active Lifestyle Shield",
    description:
      "Versatile shield sunglasses designed for active lifestyles, combining style and performance.",
    price: 59.99,
    model: "Active Lifestyle Shield 2024",
    material: "Plastic frame with mirrored lenses",
    gender: "Unisex",
    frame_material: "Plastic",
    face_shape: "Square, Heart",
    image: {
      firstImage: p4d1,
      secondImage: p4d2,
      thirdImage: p4d3,
      fourthImage: p4d4,
    },
  },
  {
    id: 9,
    name: "Retro Round",
    description:
      "Chic round sunglasses with a retro-inspired design, perfect for vintage fashion enthusiasts.",
    price: 39.99,
    model: "Retro Round 2024",
    material: "Acetate frame with tinted lenses",
    gender: "Unisex",
    frame_material: "Acetate",
    face_shape: "Heart, Oval",
    image: {
      firstImage: p1d1,
      secondImage: p1d2,
      thirdImage: p1d3,
      fourthImage: p1d4,
    },
  },
  {
    id: 10,
    name: "Classic Clubmaster",
    description:
      "Iconic clubmaster-style sunglasses blending timeless design with contemporary flair.",
    price: 44.99,
    model: "Classic Clubmaster 2024",
    material: "Metal and acetate frame with polarized lenses",
    gender: "Unisex",
    frame_material: "Metal, Acetate",
    face_shape: "Round, Oval",
    image: {
      firstImage: p2d1,
      secondImage: p2d2,
      thirdImage: p2d3,
      fourthImage: p2d4,
    },
  },
  {
    id: 11,
    name: "TechSport Shield",
    description:
      "High-performance shield sunglasses with advanced technology for optimal vision and comfort during sports.",
    price: 64.99,
    model: "TechSport Shield 2024",
    material: "TR90 frame with photochromic lenses",
    gender: "Unisex",
    frame_material: "TR90",
    face_shape: "Square, Heart",
    image: {
      firstImage: p3d1,
      secondImage: p3d2,
      thirdImage: p3d3,
      fourthImage: p3d4,
    },
  },
  {
    id: 12,
    name: "Vintage Square",
    description:
      "Vintage-inspired square sunglasses with a modern twist, perfect for adding character to your look.",
    price: 49.99,
    model: "Vintage Square 2024",
    material: "Acetate frame with mirrored lenses",
    gender: "Unisex",
    frame_material: "Acetate",
    face_shape: "Round, Oval",
    image: {
      firstImage: p4d1,
      secondImage: p4d2,
      thirdImage: p4d3,
      fourthImage: p4d4,
    },
  },
  {
    id: 13,
    name: "Fashionista Oversized",
    description:
      "Trendy oversized sunglasses with a fashion-forward design, making a bold statement wherever you go.",
    price: 54.99,
    model: "Fashionista Oversized 2024",
    material: "Plastic frame with tinted lenses",
    gender: "Female",
    frame_material: "Plastic",
    face_shape: "Heart, Diamond",
    image: {
      firstImage: p1d1,
      secondImage: p1d2,
      thirdImage: p1d3,
      fourthImage: p1d4,
    },
  },
  {
    id: 14,
    name: "Sleek Pilot",
    description:
      "Sleek and stylish pilot sunglasses with a modern edge, perfect for the fashion-conscious.",
    price: 59.99,
    model: "Sleek Pilot 2024",
    material: "Metal frame with polarized lenses",
    gender: "Male",
    frame_material: "Metal",
    face_shape: "Oval, Square",
    image: {
      firstImage: p2d1,
      secondImage: p2d2,
      thirdImage: p2d3,
      fourthImage: p2d4,
    },
  },
  {
    id: 15,
    name: "Adventurer's Choice",
    description:
      "Durable and rugged sunglasses designed for adventurers, providing reliable eye protection in extreme conditions.",
    price: 69.99,
    model: "Adventurer's Choice 2024",
    material: "TR90 frame with impact-resistant lenses",
    gender: "Male",
    frame_material: "TR90",
    face_shape: "Square, Oval",
    image: {
      firstImage: p3d1,
      secondImage: p3d2,
      thirdImage: p3d3,
      fourthImage: p3d4,
    },
  },
];

const reviews = [
  {
    name: "Josh",
    description:
      "Suntector's craftsmanship is unparalleled. The attention to detail in every pair is exceptional, offering both style and superior protection.",
    image: avatar1,
  },
  {
    name: "Emily",
    description:
      "Suntector sunglasses are my outdoor essential. They're tough, reliable, and provide unmatched clarity, perfect for all my adventures.",
    image: avatar2,
  },
  {
    name: "James",
    description:
      "Suntector elevates my style effortlessly. Their handcrafted designs are chic, versatile, and always on-trend.",
    image: avatar3,
  },
];

export { products, reviews };
export default { products, reviews };
