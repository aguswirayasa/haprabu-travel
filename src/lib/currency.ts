// ---------------------------------------------------------------------------
// Currency conversion — IDR is the single source of truth
// Update the rate below when needed; every USD price recalculates automatically.
// ---------------------------------------------------------------------------

export const EXCHANGE_RATE_IDR_PER_USD = 16_900;

/** Convert an IDR amount to whole USD (rounded UP, no cents). */
export const idrToUsd = (idr: number): number =>
  Math.ceil(idr / EXCHANGE_RATE_IDR_PER_USD);

/** Format a raw IDR number for display, e.g. 1350000 → "IDR 1.350.000". */
export const formatIDR = (amount: number): string =>
  `IDR ${amount.toLocaleString("id-ID")}`;
