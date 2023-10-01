import React from 'react';
import { useParams } from 'react-router-dom';

const ChapterPage = () => {
  const { id } = useParams();
  // Encontre o capítulo com base no ID
  const selectedChapter = caps.find((cap) => cap.id === parseInt(id, 10));

  if (!selectedChapter) {
    return <div>Capítulo não encontrado</div>;
  }

  return (
    <div>
      <h2>{selectedChapter.title}</h2>
      <p>{selectedChapter.subtitle}</p>
      {/* Renderize o conteúdo do capítulo aqui */}
    </div>
  );
};

export default ChapterPage;
