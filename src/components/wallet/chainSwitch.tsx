import { useConnect } from "graz";
import { mainnetChainsArray } from "graz/chains";

export function ChainSelector() {
  const { connect } = useConnect();

  return (
    <select
      name="chainSelector"
      onChange={(e) => connect({ chain: mainnetChainsArray[+e.target.value] })}
    >
      {mainnetChainsArray.map((chain, index) => (
        <option key={chain.chainId} value={index}>
          {chain.chainName}
        </option>
      ))}
    </select>
  );
}
