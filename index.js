export default keyword_string => {
  const regex_search = '%' + keyword_string.replace(/\s+/g, ' ').split(' ').map(str => str.trim()).join('%') + '%'
  const escapedSearchString = regex_search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/%/g, ".*");
  return new RegExp(escapedSearchString, "i");
}
