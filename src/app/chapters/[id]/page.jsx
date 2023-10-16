"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { caps } from "../../../data/caps";
import ChapterData from "../../../components/chapter/ChapterPage";

const ChapterPage = ({ params }) => {

    console.log(params.id)

  // const selectedChapter = caps.find((item) => item.id === parseInt(id));

  // if (!selectedChapter) {
  //   return <div>Capítulo não encontrado.</div>;
  // }

  return (
    <>
      <p>{params.title}</p>
    </>
  );
};

export default ChapterPage;
