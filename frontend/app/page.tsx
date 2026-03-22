import Header from "./components/header";
export default function Home() {
  const headerTitle= 'Darien Parker';
  return (
    <section className='centerHorizontal' >
      <Header title={headerTitle}/>
    </section>
  );
}
