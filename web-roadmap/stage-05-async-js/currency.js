async function convertCurrency(amount, from = "USD", to = "INR") {
  const url = `https://open.er-api.com/v6/latest/${encodeURIComponent(from)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    const rate = data.rates?.[to];
    if (!rate) {
      throw new Error(`Unsupported target currency: ${to}`);
    }
    return Number((amount * rate).toFixed(2));
  } catch (err) {
    console.error("Conversion error:", err.message);
    return null;
  }
}

if (typeof module !== "undefined") {
  module.exports = { convertCurrency };
}
