function Transactions({ imgSrc, name, price, type }) {
  return (
    <tbody>
      <tr className="border border-gray-200">
        <td className="flex items-center space-x-2 p-3">
          <img src={imgSrc} alt={imgSrc} />
          <p>10th Aug 2024</p>
        </td>
        <td className="font-bold p-3">{name}</td>
        <td className="text-[#94A3B8] p-3">{price}</td>
        <td className="font-bold p-3">{type}</td>
      </tr>
    </tbody>
  );
}

export default Transactions;
