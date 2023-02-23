import Link from "next/link";

function MainNavigation() {

  return (
    <header className="fixed top-0 w-full h-40rem flex items-center justify-between bg-[#bc5a45] p-2">
      <div className="text-xl md:text-2xl font-bold pr-3 leading-normal">Event Management Webapp</div>
      <nav>
        <ul className="flex m-0 p-0 space-x-5 ml-2">
          <li className="font-bold hover:underline hover:underline-offset-4 p-2 ">
            <Link href='/' className="no-underline text-lg md:text-xl leading-tight">All Events</Link>
          </li>
          <li className="font-bold hover:underline hover:underline-offset-4 p-2  border border-t-transparent border-b-transparent border-r-transparent">
            <Link href='/newEvent' className="no-underline text-lg md:text-xl leading-tight">Add New Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;