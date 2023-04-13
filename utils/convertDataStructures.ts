export const convertToList = <T extends object>(
  payload: T[],
  typeOfId: string = "_id"
): { [_id: string]: T } => {
  if (payload) {
    return payload.reduce((acc: any, item: any) => {
      acc[item[typeOfId]] = item;
      return acc;
    }, {});
  } else {
    return {};
  }
};

export const convertToArray = <T extends object>(payload: {
  [_id: string]: T;
}): T[] => {
  if (payload) {
    const deepClone = JSON.parse(JSON.stringify(payload));
    return Object.keys(deepClone).map((_id) => deepClone[_id]);
  } else {
    return [];
  }
};
