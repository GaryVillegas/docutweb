export interface stockInfo {
  nombreProducto: string;
  descripcionProducto: string;
  cantidadProducto: number;
  precioProducto: number;
  storeId: string;
}

export interface stockData {
  stockId: string;
  stockInfo: stockInfo;
}
