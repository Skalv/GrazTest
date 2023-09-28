import { useAccount, useActiveChain, useConnect, useDisconnect } from "graz";
import { ChainSelector } from "./chainSwitch";
import { Balance } from ".";

export default function Wallet() {
  const {
    data: account,
    isConnected,
    isConnecting,
    isDisconnected,
    isReconnecting,
  } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const activeChain = useActiveChain();

  function handleButton() {
    return isConnected ? disconnect() : connect();
  }

  return (
    <>
      {isDisconnected && <p>Connect wallet using the button below.</p>}
      {isConnected && <ChainSelector />}
      {activeChain && (
        <p>
          Current chain: <code>{activeChain.chainId}</code>
        </p>
      )}
      {account && (
        <p>
          Wallet address: <code>{account.bech32Address}</code>
        </p>
      )}
      <Balance />
      <br />
      <button disabled={isConnecting || isReconnecting} onClick={handleButton}>
        {(isConnecting || isReconnecting) && "Connecting..."}
        {isConnected && "Disconnect Wallet"}
        {isDisconnected && "Connect Wallet"}
      </button>
    </>
  );
}
