import Link from "next/link";

function MainNavigation() {

  return (
    <header className="w-full h-20 flex items-center justify-between bg-[#bc5a45] p-2">
      <div className="text-2xl font-bold">Event Management WebApp</div>
      <nav>
        <ul className="flex m-0 p-0 space-x-5 ml-2">
          <li className="font-bold hover:underline hover:underline-offset-4 p-2">
            <Link href='/' className="no-underline text-lg">All Events</Link>
          </li>
          <li className="font-bold hover:underline hover:underline-offset-4 p-2">
            <Link href='/newEvent' className="no-underline text-lg">Add New Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;