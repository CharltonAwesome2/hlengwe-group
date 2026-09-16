import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metaForPath } from '@config/siteMeta';

function setFavicon(href) {
  // Remove any existing icon links (including the one baked into index.html)
  document
    .querySelectorAll("link[rel~='icon']")
    .forEach((el) => el.parentNode.removeChild(el));

  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = href;
  document.head.appendChild(link);
}

function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.name = 'description';
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export default function useDocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaForPath(pathname);
    document.title = meta.title;
    setFavicon(meta.favicon);
    setMetaDescription(meta.description);
  }, [pathname]);
}