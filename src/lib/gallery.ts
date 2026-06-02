import { ROUTES } from '@/data/navigation-state';
import { galleryCategories, type GalleryCategory, type GalleryMediaItem } from '@/data/site-data';

export function getGalleryItemsForCategory<T extends GalleryMediaItem>(
  category: GalleryCategory,
  items: readonly T[],
) {
  return category === 'All'
    ? items
    : items.filter((item) => item.category === category);
}

export const getGalleryImagesForCategory = getGalleryItemsForCategory;

export function getGalleryMediaSrc(item: GalleryMediaItem) {
  return item.type === 'video' && item.poster ? item.poster : item.src;
}

export function buildGalleryHref(category: GalleryCategory) {
  if (category === 'All') return ROUTES.gallery;
  const params = new URLSearchParams({ category: category.toLowerCase() });
  return `${ROUTES.gallery}?${params.toString()}`;
}

export function getGalleryCategoryFromParam(param: string | null): GalleryCategory {
  if (!param) return 'All';
  const lower = param.toLowerCase();
  if (lower === 'all') return 'All';

  const match = galleryCategories.find(
    (category) => category.toLowerCase() === lower
  );
  if (match) return match;

  const firstLetterMatch = galleryCategories.find(
    (category) => category.charAt(0).toLowerCase() === lower.charAt(0)
  );
  return firstLetterMatch || 'All';
}
