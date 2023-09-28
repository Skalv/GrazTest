import { useBalances } from "graz";

export function Balance() {
  const { data: balances, isLoading, isError, error } = useBalances();

  // Malheureusement quand y'a un problème avec un RPC, ca ne déclenche pas d'erreur....
  if (isError) return <p>Error: {error}</p>;

  return (
    <div>
      {isLoading ? (
        "Fetching balances..."
      ) : !balances || balances.length === 0 ? (
        <p>No balances</p>
      ) : (
        <>
          <p>Balances: </p>
          <ul>
            {balances?.map((coin) => (
              <li key={coin.denom}>
                {coin.amount} {coin.denom}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
