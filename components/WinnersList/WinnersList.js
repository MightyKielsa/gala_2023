import TableRow from "./TableRow/TableRow";

function WinnersList({ dataList }) {
  const mock_dataList = [
    { name: "Gietek", count: 430020 },
    { name: "Marcin", count: 101212 },
    { name: "Kamil", count: 300403 },
    { name: "Emil", count: 540700 },
    { name: "Krzysiu", count: 407243 },
    { name: "Jedrek", count: 559864 },
    { name: "Giergiel", count: 490234 },
    { name: "Nadol", count: 613045 },
    { name: "Kielsa", count: 452340 },
    { name: "Hasiec", count: 2 },
    { name: "Maciek", count: 392134 },
  ];

  return (
    <div className="h-1/2">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Ranking words:</th>
            <th class="px-4 py-2">Views</th>
          </tr>
        </thead>
        <tbody>
          {mock_dataList.map((person, index) => (
            <TableRow
              name={person.name}
              number={person.count}
              key={index}
            ></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WinnersList;
