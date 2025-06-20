export interface storeInfo {
  bussinessName: string;
  direction: string;
  categories: string[];
}

export interface storeData {
  storeId: string;
  storeInfo: storeInfo;
}
