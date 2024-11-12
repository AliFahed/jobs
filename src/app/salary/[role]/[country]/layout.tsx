import { Header } from "../../../../components/Header";

export default function JobLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header option="Link Not In Page" />
      <main>{children}</main>
    </>
  );
}
