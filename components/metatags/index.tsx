import React from 'react';
import Head from 'next/head';

interface MetaTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  published: string;
  updated: string;
  tags: string;
}

const MetaTags = ({ title, description, image, url, type, published, updated, tags }: MetaTagsProps): React.ReactNode => (
  <Head>
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} key="desc" />}

    {title && <meta itemProp="name" content={title} key="itempropname" />}
    {description && <meta itemProp="description" content={description} key="itempropdesc" />}
    {image && <meta itemProp="image" content={image} key="itempropimage" />}

    {title && <meta name="twitter:title" content={title} key="twittertitle" />}
    {description && <meta name="twitter:description" content={description} key="twitterdesc" />}
    {image && <meta name="twitter:image:src" content={image} key="twitterimg" />}

    {title && <meta property="og:title" content={title} key="ogtitle" />}
    {url && <meta property="og:url" content={url} key="ogurl" />}
    {description && <meta property="og:description" content={description} key="ogdesc" />}
    {image && <meta property="og:image" content={image} key="ogimg" />}
    {type && <meta property="og:type" content={type} key="ogtype" />}

    {published && <meta property="article:published_time" content={published} key="published" />}
    {updated && <meta property="article:modified_time" content={updated} key="updated" />}
    {tags && <meta property="article:tag" content={tags} key="tags" />}

    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
  </Head>
);

export default MetaTags;
