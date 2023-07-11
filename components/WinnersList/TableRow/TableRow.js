function TableRow({ name, number }) {
  return (
    <tr class="bg-gray-100">
      <td class="border px-4 py-2">{name}</td>
      <td class="border px-4 py-2">{number}</td>
    </tr>
  );
}

export default TableRow;
