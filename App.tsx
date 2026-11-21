import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('')
  const [months, setMonths] = useState('')
  const [payment, setPayment] = useState<number | null>(null)

  function calculateLoan() {
    const p = Number(amount)
    const r = Number(rate) / 100 / 12
    const n = Number(months)

    if (p <= 0 || n <= 0 || Number(rate) < 0) {
      alert('Please enter valid loan details.')
      return
    }

    const monthlyPayment =
      r === 0 ? p / n : (p * r) / (1 - Math.pow(1 + r, -n))

    setPayment(monthlyPayment)
  }

  return (
    <main className="container">
      <h1>Loan Calculator</h1>
      <p>Calculate your estimated monthly loan repayment.</p>

      <label>Loan Amount (KSh)</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter loan amount"
      />

      <label>Annual Interest Rate (%)</label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Enter interest rate"
      />

      <label>Loan Period (Months)</label>
      <input
        type="number"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        placeholder="Enter loan period"
      />

      <button onClick={calculateLoan}>
        Calculate Loan
      </button>

      {payment !== null && (
        <h2>
          Monthly Payment: KSh {payment.toFixed(2)}
        </h2>
      )}
    </main>
  )
}

export default App