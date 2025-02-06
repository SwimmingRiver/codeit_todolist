"use client";

import { useCreateImageUrl, useLoadTodo, useRemoveTodo } from "@/app/hooks";
import useEditTodo from "@/app/hooks/useEditTodo";
import { useParams } from "next/navigation";
import { it } from "node:test";
import { useState } from "react";

function Items() {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [memo, setMemo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { itemId } = useParams();

  if (!itemId) {
    return "nothing";
  }
  if (typeof itemId === "string") {
    const { mutate: edit } = useEditTodo(itemId);
    const { mutate: remove } = useRemoveTodo();
    const { mutate: uploadImage } = useCreateImageUrl();
    const { data } = useLoadTodo(itemId);

    const handleEdit = () => {
      setIsEdit((prev) => !prev);
      if (isEdit) {
        edit({
          name,
          memo,
          imageUrl,
        });
        setIsEdit(false);
      }
    };
    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append("image", file);
        uploadImage(formData, {
          onSuccess: (data) => setImageUrl(data.url),
        });
      }
    };

    const handleRemove = () => {
      remove(itemId);
    };
    return (
      <div>
        {isEdit ? (
          <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        ) : (
          <div>{data?.name}</div>
        )}
        {isEdit ? (
          <input placeholder="memo" onChange={(e) => setMemo(e.target.value)} />
        ) : (
          <div>{data?.memo}</div>
        )}
        {isEdit ? (
          <input
            placeholder="image"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleImage}
          />
        ) : (
          data?.imageUrl && <img src={data.imageUrl} />
        )}
        <button onClick={handleEdit}>수정하기</button>
        <button onClick={handleRemove}>삭제하기</button>
      </div>
    );
  }
}
export default Items;
