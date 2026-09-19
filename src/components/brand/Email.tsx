// E-mail que, se precisar quebrar a linha, quebra logo após o "@".
export function Email({ address }: { address: string }) {
  const [user, domain] = address.split("@");
  return (
    <>
      {user}@<wbr />
      {domain}
    </>
  );
}
