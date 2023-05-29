export const isComponentVisible = (element) => {
    const { top, bottom } = element.getBoundingClientRect();
    const { innerHeight } = window;
    return top >= 0 && bottom <= innerHeight;
}