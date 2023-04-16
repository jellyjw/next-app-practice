import Navbar from "../elements/Navbar/Navbar";
import Dropdown from "../Dropdown";
import Card from "../elements/Card/Card";

export default function MainLayout() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Dropdown />
      <Card />
    </main>
  );
}
