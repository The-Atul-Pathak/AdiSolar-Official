export interface SolarCalculatorInput {
  monthlyBill: number
}

export interface SolarCalculatorResult {
  monthlySavings: number
  systemSizeKw: number
  installationCost: number
  paybackYears: number
}

export function calculateSolar(
  input: SolarCalculatorInput
): SolarCalculatorResult {
  const { monthlyBill } = input
  
  // Formulas and constants from SPEC.md / User Request
  const ELECTRICITY_RATE   = 8        // ₹ per kWh (Indian average)
  const SOLAR_EFFICIENCY   = 0.80     // solar covers 80% of consumption
  const MONTHLY_GENERATION = 120      // kWh generated per kW per month
  const COST_PER_KW        = 60000    // ₹ per kW installed

  const monthlyUnits     = monthlyBill / ELECTRICITY_RATE
  const solarUnits       = monthlyUnits * SOLAR_EFFICIENCY
  const systemSizeKw     = solarUnits / MONTHLY_GENERATION
  const installationCost = systemSizeKw * COST_PER_KW
  const monthlySavings   = solarUnits * ELECTRICITY_RATE
  const paybackYears     = installationCost / (monthlySavings * 12)

  return {
    monthlySavings:   Math.round(monthlySavings),
    systemSizeKw:     Math.round(systemSizeKw * 10) / 10,
    installationCost: Math.round(installationCost),
    paybackYears:     Math.round(paybackYears * 10) / 10,
  }
}

/**
 * Formats a number in the Indian numbering system (e.g., 1,00,000)
 */
export function formatIndianNumber(num: number): string {
  return num.toLocaleString('en-IN')
}
