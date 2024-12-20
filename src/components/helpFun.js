export function shortenTitle(title) {
  return title.length <= MAX_TASK_TITLE_LENGTH
    ? title
    : `${title.substring(0, MAX_TASK_TITLE_LENGTH)}...`;
}

export const applyFilters = (isSorted, searchQuery, taskList) => {
  console.log("applyFilters", isSorted, searchQuery, taskList);
  const searchedList = searchQuery
    ? taskList.filter((item) => item.title.toLowerCase().includes(searchQuery))
    : taskList;
  return isSorted
    ? [...searchedList].sort((a, b) => (a.title > b.title ? 1 : -1))
    : searchedList;
};

const MAX_TASK_TITLE_LENGTH = 20;