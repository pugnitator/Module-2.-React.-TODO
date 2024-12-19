export function shortenTitle(title) {
  console.log('shortenTitle', title.length);
  return title.length <= MAX_TASK_TITLE_LENGTH
    ? title
    : `${title.substring(0, MAX_TASK_TITLE_LENGTH)}...`;
}

const MAX_TASK_TITLE_LENGTH = 20;