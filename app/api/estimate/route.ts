import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { projectType, addons, urgency, clientName, clientEmail } = body;

    const basePricing: Record<string, { cost: number; days: number }> = {
      landing: { cost: 150, days: 4 },
      fullstack: { cost: 380, days: 14 },
      ecommerce: { cost: 550, days: 21 },
      dashboard: { cost: 450, days: 18 }
    };

    const addonPricing: Record<string, { cost: number; days: number }> = {
      auth: { cost: 60, days: 2 },
      payment: { cost: 80, days: 3 },
      seo: { cost: 50, days: 2 },
      admin: { cost: 100, days: 4 },
      ai: { cost: 90, days: 3 }
    };

    const base = basePricing[projectType] || basePricing.fullstack;
    let totalCost = base.cost;
    let totalDays = base.days;

    if (Array.isArray(addons)) {
      addons.forEach((ad: string) => {
        if (addonPricing[ad]) {
          totalCost += addonPricing[ad].cost;
          totalDays += addonPricing[ad].days;
        }
      });
    }

    if (urgency === "express") {
      totalCost = Math.round(totalCost * 1.25);
      totalDays = Math.max(3, Math.round(totalDays * 0.65));
    } else if (urgency === "relaxed") {
      totalCost = Math.round(totalCost * 0.95);
      totalDays = Math.round(totalDays * 1.2);
    }

    return NextResponse.json({
      success: true,
      quote: {
        currency: "USD",
        estimatedCost: totalCost,
        estimatedWorkingDays: totalDays,
        techStack: ["Next.js 14", "React 18", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
        summary: `Custom ${projectType} solution engineered by Babul Hossan.`
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate estimation." }, { status: 500 });
  }
}
