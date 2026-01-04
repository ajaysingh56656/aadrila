"use client";
import ProductRow from "./ProductRow";

const products = [
  {
    badge: "DocPilot",
    title: "Streamline Document Workflows with Automation",
    features: [
      "Automates document collection, routing, and task assignments.",
      "Real-time tracking with advanced dashboards.",
      "Seamless integration with enterprise systems via APIs.",
    ],
    benefits: [
      "Reduce turnaround times by 50%.",
      "Improve operational efficiency with minimal manual effort.",
    ],
    imageSrc: "/product2.png",
    reverse: true,
  },
  {
    badge: "Doxtract",
    title: "Extract, Validate, and Process Documents with Ease",
    features: [
      "OCR and NLP-based data extraction.",
      "Handles unstructured documents across industries.",
      "Validates fields using external data sources.",
    ],
    benefits: [
      "Process 10,000+ documents in minutes.",
      "Achieve 99% data accuracy with AI-driven validation.",
    ],
    imageSrc: "/product3.png",
  },
];

export default function OurProductsSection() {
  return (
    <section className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-32 pt-12 lg:pt-20 pb-12 lg:pb-20">
      {products.map((p, i) => (
        <ProductRow key={i} {...p} number={i} />
      ))}
    </section>
  );
}
