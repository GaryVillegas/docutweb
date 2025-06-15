export interface storeInfo {
  bussinessName: string;
  direction: string;
  categories: string[];
}

export interface storeData {
  userUID: string;
  storeInfo: storeInfo;
}
