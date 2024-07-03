import { Client, Token } from "@solflare-wallet/utl-sdk";
import { PublicKey } from "@solana/web3.js";

export default async function Home() {
  const utl = new Client();
  const token: Token = await utl.fetchMint(
    new PublicKey("So11111111111111111111111111111111111111112")
  );

  return <>{token.logoURI}</>;
}

// export default function Home() {
//   return <>p</>;
// }
