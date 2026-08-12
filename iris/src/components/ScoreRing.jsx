export default function ScoreRing({score}){
    const raio = 52
    const circunferencia = 2 * Math.PI * raio
    const preenchido = (score / 100) * circunferencia

    return (
    <svg width="130" height="130" viewBox="0 0 130 130" className="shrink-0">
      <circle cx="65" cy="65" r={raio} fill="none" stroke="#E4EFE8" strokeWidth="10" />
      <circle
        cx="65"
        cy="65"
        r={raio}
        fill="none"
        stroke="var(--color-good)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circunferencia}
        strokeDashoffset={circunferencia - preenchido}
        transform="rotate(-90 65 65)"
      />
      <text
        x="65"
        y="62"
        textAnchor="middle"
        fontSize="30"
        fontWeight="700"
        fill="var(--color-ink)"
        fontFamily="Poppins, sans-serif"
      >
        {score}
      </text>
      <text x="65" y="82" textAnchor="middle" fontSize="13" fill="var(--color-ink-soft)">
        / 100
      </text>
    </svg>
  )
}