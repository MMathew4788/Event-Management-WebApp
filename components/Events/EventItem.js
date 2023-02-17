import { useRouter } from "next/router";
import Card from "../UI/Card";

function EventItem(props) {

  const router= useRouter();
  function showDetailHandler() {
    router.push('/' + props.id);
  }

  return (
    <li>
      <Card>
        <div className="w-full h-full overflow-hidden mx-auto rounded-t-xl">
          <img src={props.image} alt={props.title} className="object-fit" />
        </div>
        <div className="p-2 text-center">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className="text-center">
          <button
            className="rounded-xl bg-[#f18973] hover:bg-[#bc5a45] px-4 py-2"
            onClick={showDetailHandler}
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default EventItem;
