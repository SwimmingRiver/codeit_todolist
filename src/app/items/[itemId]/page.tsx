"use client";

import { useParams } from "next/navigation";

function Items() {
  const { itemId } = useParams();
  return itemId;
}
export default Items;
