export function getDirtyValues(
  dirtyFields: object | boolean,
  allValues: object,
): object {
  if (dirtyFields === true || Array.isArray(dirtyFields)) return allValues

  return Object.fromEntries(
    Object.keys(dirtyFields).map((key) => [
      key,
      // @ts-ignore
      getDirtyValues(dirtyFields[key], allValues[key]),
    ]),
  )
}
