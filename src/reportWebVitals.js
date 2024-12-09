import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

export default function reportWebVitals(callback) {
  if (callback && typeof callback === 'function') {
    onCLS(callback);   // Cumulative Layout Shift
    onFCP(callback);   // First Contentful Paint
    onLCP(callback);   // Largest Contentful Paint
    onTTFB(callback);  // Time to First Byte
    onINP(callback);   // Interaction to Next Paint (substitui FID)
  }
}