import { onBeforeUnmount, onMounted, ref } from 'vue';

type UseRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

/**
 * Adds an `is-visible` class to the bound element when it scrolls into view.
 * Pairs with the `.reveal` utility in app.css. SSR-safe (observer only runs on
 * the client) and a no-op when IntersectionObserver is unavailable, leaving the
 * element visible via the reduced-motion fallback.
 */
export const useReveal = (options: UseRevealOptions = {}) => {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -10% 0px',
    once = true,
  } = options;

  const el = ref<HTMLElement | null>(null);
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined' || !el.value) {
      isVisible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;

            if (once && observer) {
              observer.disconnect();
            }
          } else if (!once) {
            isVisible.value = false;
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(el.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return { el, isVisible };
};
