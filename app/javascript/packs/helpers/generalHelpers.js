export function getGender(gender) {
  if (typeof gender !== 'boolean') {
    return '';
  }
  return gender ? 'Man' : 'Vrouw';
}

export function isProcessed(processed) {
  return processed ? 'Ja' : 'Nee';
}

export function sortByName(a, b) {
  const nameA = a.name;
  const nameB = b.name;
  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}
