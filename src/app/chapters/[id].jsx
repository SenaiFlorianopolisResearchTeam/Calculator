import React from 'react'
import styles from './page.module.css'
import { useRouter } from "next/router";
import Chapter from "../../components/card/Chapter"; 

const ChapterPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const chapter = findChapterById(id);

  if (!chapter) {
    return <div>Capítulo não encontrado</div>;
  }

  return (
    <div>
      <h1>{chapter.title}</h1>
      <Chapter content={chapter.content} />
    </div>
  );
};

export default ChapterPage;
