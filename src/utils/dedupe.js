export function deDuplicateByName(arr){
  const unique = [];
  for (const item of arr) {
    const isDuplicate = unique.find((obj) => obj.name.value === item.name.value);
    if (!isDuplicate) {
      unique.push(item);
    }
  }
  return unique;
}
