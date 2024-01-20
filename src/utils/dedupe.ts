interface Item {
  name: {
    value: string;
  };
}

export function deduplicateByName(arr: Item[]): Item[] {
  const unique: Item[] = [];
  for (const item of arr) {
    const isDuplicate = unique.find(
      (obj) => obj.name.value === item.name.value,
    );
    if (!isDuplicate) {
      unique.push(item);
    }
  }
  return unique;
}
