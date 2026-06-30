"use client";

import { useState } from "react";

const tourSteps = [
  {
    target: "#capabilities",
    title: "Core Capabilities",
    description: "See what 4AT can automate for your finance team",
  },
  {
    target: "#pricing",
    title: "Flexible Pricing",
    description: "Choose the plan that fits your team size and needs",
  },
];

export default function ProductTour() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <button
      className="fixed bottom-20 right-4 px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
      onClick={() => setCurrentStep(0)}
    >
      Take a Tour →
    </button>
  );
}