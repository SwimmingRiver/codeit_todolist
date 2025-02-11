import { todo } from "@/app/\btypes";
import Image from "next/image";
import React from "react";
import { DoneListItem } from "../../ListItems";

function DoneList({ doneList }: { doneList: todo[] }) {
  return (
    <>
      {doneList ? (
        <div className="lg:w-[580px] md:w-100 sm:w-100">
          <Image src={"/done.svg"} alt="done" width={100} height={100} />
          {doneList?.map((items: todo) => (
            <DoneListItem key={items.id} item={items} />
          ))}
        </div>
      ) : (
        <Image
          src={"/emptyDone.svg"}
          alt="done empty"
          width={100}
          height={100}
        />
      )}
    </>
  );
}

export default DoneList;
