'use client';

import SchemaOrg from './SchemaOrg';
import OpenGraph from './OpenGraph';
import Breadcrumbs from './Breadcrumbs';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article' | 'blog' | 'service' | 'organization';
  publishedTime?: string;
  author?: string;
  keywords?: string[];
  breadcrumbs?: Array<{ name: string; url: string }>;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEO({
  title,
  description,
  url,
  image,
  type = 'website',
  publishedTime,
  author,
  keywords,
  breadcrumbs,
  noindex = false,
  nofollow = false
}: SEOProps) {
  return (
    <>
      {/* Meta tags de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content={author || 'ClimGO'} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph et Twitter Cards */}
      <OpenGraph
        title={title}
        description={description}
        url={url}
        image={image}
        type={type === 'article' ? 'article' : 'website'}
        publishedTime={publishedTime}
        author={author}
      />
      
      {/* Schema.org JSON-LD */}
      <SchemaOrg
        type={type}
        title={title}
        description={description}
        url={url}
        image={image}
        author={author}
        publishedTime={publishedTime}
        keywords={keywords}
      />
      
      {/* Breadcrumbs si fournis */}
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      
      {/* Meta tags supplémentaires */}
      <meta name="language" content="fr" />
      <meta name="geo.region" content="FR-33" />
      <meta name="geo.placename" content="Gironde" />
      <meta name="geo.position" content="44.837789;-0.57918" />
      <meta name="ICBM" content="44.837789, -0.57918" />
      
      {/* Réseaux sociaux */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="ClimGO" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </>
  );
}
