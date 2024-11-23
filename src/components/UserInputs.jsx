export default function UserInputs({ inputsValue, onModify }) {
  return (
    <main id="user-input">
      <section className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            value={inputsValue.initialInvestment}
            onChange={() => onModify("initialInvestment", event.target.value)}
            required
          />
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={inputsValue.annualInvestment}
            onChange={() => onModify("annualInvestment", event.target.value)}
            required
          />
        </div>
      </section>
      <section className="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={inputsValue.expectedReturn}
            onChange={() => onModify("expectedReturn", event.target.value)}
            required
          />
        </div>
        <div>
          <label>DURATION</label>
          <input
            type="number"
            value={inputsValue.duration}
            onChange={() => onModify("duration", event.target.value)}
            required
          />
        </div>
      </section>
    </main>
  );
}
