// ChapterPage.jsx

import React from "react";
import { useRouter } from "next/navigation";
import { caps } from "../../data/caps";
import ChapterData from "./ChapterData";

const ChapterPage = () => {
  const router = useRouter();
  const { id } = router.query; // Obtém o ID do capítulo da URL

  // Encontre o capítulo com base no ID
  const selectedChapter = caps.find((item) => item.id === parseInt(id));

  if (!selectedChapter) {
    // Lide com o caso em que o capítulo não é encontrado
    return <div>Capítulo não encontrado.</div>;
  }

  return (
    <ChapterData
      title={selectedChapter.title}
      subtitle={selectedChapter.subtitle}
      paragraphs={selectedChapter.paragraphs}
    />
  );
};

export default ChapterPage;
