import Navbar from "../elements/Navbar/Navbar";
import Dropdown from "../Dropdown";

export default function MainLayout() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Dropdown />
    </main>
  );
}
