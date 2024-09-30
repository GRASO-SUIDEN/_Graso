function Transactions({ imgSrc, name, price, type }) {
  return (
    <tbody>
      <tr>
        <td className="flex items-center space-x-2">
          <img src={imgSrc} alt={imgSrc} />
          <p>10th Aug 2024</p>
        </td>
        <td className="font-bold">{name}</td>
        <td className="text-[#94A3B8]">{price}</td>
        <td className="font-bold">{type}</td>
      </tr>
    </tbody>
  );
}

export default Transactions;
