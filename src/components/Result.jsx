import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputsValue }) {
  const resultData = calculateInvestmentResults(inputsValue);
  console.log(resultData);
  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr className="center">
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          totalInterest += data.interest;
          return (
            <tr key={data.year} className="center">
              <td>{data.year}</td>
              <td>{formatter.format(Math.round(data.valueEndOfYear))}</td>
              <td>{formatter.format(Math.round(data.interest))}</td>
              <td>{formatter.format(Math.round(totalInterest))}</td>
              <td>
                {formatter.format(
                  inputsValue.initialInvestment +
                    data.year * data.annualInvestment
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
