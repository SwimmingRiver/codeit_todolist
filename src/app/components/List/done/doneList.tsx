import { todo } from "@/app/\btypes";
import Image from "next/image";
import React from "react";
import { DoneListItem } from "../../ListItems";

function DoneList({ doneList }: { doneList: todo[] }) {
  return (
    <div>
      <Image src={"/done.svg"} alt="done" width={100} height={100} />
      {doneList?.map((items: todo) => (
        <DoneListItem item={items} />
      ))}
    </div>
  );
}

export default DoneList;
