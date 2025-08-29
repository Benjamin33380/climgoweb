'use client';

interface OpenGraphProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
  siteName?: string;
}

export default function OpenGraph({
  title,
  description,
  url,
  image = 'https://www.climgo.fr/logo.png',
  type = 'website',
  publishedTime,
  author = 'ClimGO',
  siteName = 'ClimGO'
}: OpenGraphProps) {
  return (
    <>
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@climgo" />
      <meta name="twitter:creator" content="@climgo" />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Blog" />
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </>
  );
}
