import React from 'react';
import Link from 'next/link';

const Chapter = ({ title, subtitle, url }) => {

  return (
    <div>
        <Link href={url}>
        <h2>{title}</h2>
        <p>{subtitle}</p>  
        </Link>
    </div>
  );
};

export default Chapter;
