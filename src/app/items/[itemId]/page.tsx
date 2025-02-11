"use client";

import { useCreateImageUrl, useLoadTodo, useRemoveTodo } from "@/app/hooks";
import useEditTodo from "@/app/hooks/useEditTodo";
import { useParams } from "next/navigation";
import Image from "next/image";

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
    const { mutate: checkComplete } = useEditTodo(`${itemId}`);
    const handleEdit = () => {
      setIsEdit((prev) => !prev);
      if (isEdit) {
        edit({
          name: name || data.name,
          memo: memo || data.memo,
          imageUrl,
          isCompleted: data.isCompleted,
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
    const handleComplete = () => {
      checkComplete({
        name: data.name,
        memo: data.memo,
        imageUrl: data.imageUrl,
        isCompleted: !data.isCompleted,
      });
    };
    return (
      <div className="w-[1200px] h-[100vh] px-48">
        {isEdit ? (
          <input
            className="w-full border border-black rounded-full p-2 flex justify-center gap-2 my-4"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <div className="w-full border border-black rounded-full p-2 flex justify-center gap-2 my-4">
            <Image
              onClick={handleComplete}
              src={
                data?.isCompleted ? "/checkButton.svg" : "/uncheckButton.svg"
              }
              alt="checkButton"
              width={25}
              height={25}
            />
            <span className="underline">{data?.name}</span>
          </div>
        )}
        <div className="flex gap-8">
          <div className="relative bg-slate-50 w-[384px] h-[311px] border border-dashed rounded-lg">
            <div className="w-full h-full flex justify-center items-center">
              {data?.imageUrl || imageUrl ? (
                <img
                  src={data.imageUrl || imageUrl}
                  alt="todoImage"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <Image
                  src="/emptyImage.svg"
                  alt="empty image"
                  width={50}
                  height={50}
                />
              )}
            </div>

            <div className="absolute bottom-2 right-2 z-10">
              <label className="cursor-pointer">
                <Image
                  src="/addButton.svg"
                  alt="addButton"
                  width={36}
                  height={36}
                />
                <input
                  hidden
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleImage}
                />
              </label>
            </div>
          </div>
          <div className="relative w-[384px] h-[311px]">
            <div className="flex justify-start items-center flex-col w-[100%] h-[100%]">
              <span className="z-10 text-[#92400E] text-bold h-[100px] pt-6">
                Memo
              </span>
              {isEdit ? (
                <input
                  className="z-10"
                  placeholder="memo"
                  onChange={(e) => setMemo(e.target.value)}
                />
              ) : (
                <span className="z-10">{data?.memo}</span>
              )}
            </div>

            <Image src="/memo.svg" alt="memo" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="flex justify-end p-4 gap-2">
          <button
            onClick={handleEdit}
            className="w-[168px] h-[56px] rounded-full border-2 border-b-4 border-e-4 border-black p-4 bg-color-slate-200 flex items-center justify-center gap-2"
          >
            <Image src="/check.svg" alt="check" width={16} height={16} />
            {isEdit ? "수정완료" : "수정하기"}
          </button>
          <button
            onClick={handleRemove}
            className="w-[168px] h-[56px] rounded-full border-2 border-b-4 border-e-4 border-black p-4 bg-color-slate-200 flex items-center justify-center gap-2 text-white bg-rose-500"
          >
            <Image src="/close.svg" alt="close" width={16} height={16} />
            삭제하기
          </button>
        </div>
      </div>
    );
  }
}
export default Items;
