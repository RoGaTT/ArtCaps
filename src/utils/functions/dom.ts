/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const goBlank = (path: string) => (): void => {
  window?.open(path, '_blank', 'noreferrer,noopener');
};

export const goWithScroll = (path: string, id: string, history: any) => (): void => {
  if (history && history.push) {
    history.push(path);
  }
  setTimeout(() => {
    document?.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 200);
};
