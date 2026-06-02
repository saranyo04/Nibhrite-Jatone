import { ROUTES } from '@/data/navigation-state';
import type { GalleryCategory, GalleryImage } from '@/data/site-data';

export function getGalleryImagesForCategory(
  category: GalleryCategory,
  images: readonly GalleryImage[],
) {
  return category === 'All'
    ? images
    : images.filter((image) => image.category === category);
}

export function buildGalleryHref(category: GalleryCategory) {
  return category === 'All'
    ? ROUTES.gallery
    : `${ROUTES.gallery}?category=${category.toLowerCase()}`;
}
