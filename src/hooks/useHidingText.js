export default function useHidingText(visiblePeriod) {

  function setText({ setter, text }) {
    setter(text);
    setTimeout(() => { setter('') }, visiblePeriod);
  }

  return { setText };
}
