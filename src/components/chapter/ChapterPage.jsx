'use client'
import React from "react";
import { caps } from "../../data/caps";
import ChapterData from "./ChapterData";

const ChapterPage = ({ params }) => {
  const selectedChapter = caps.find((caps) => caps.id === parseInt(params.id));

  if (!selectedChapter) {
    return <div>Capítulo não encontrado.</div>;
  }

  return (
    <>
      <ChapterData
        chapter={selectedChapter.id}
        title={selectedChapter.title}
        subtitle={selectedChapter.subtitle}
        paragraphs={selectedChapter.paragraphs}
      />
    </>
  ); 
};

export default ChapterPage;
