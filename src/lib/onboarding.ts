export const openOnboarding = () => {
  window.dispatchEvent(new CustomEvent('openOnboarding'));
};

export const closeOnboarding = () => {
  window.dispatchEvent(new CustomEvent('closeOnboarding'));
};