export interface criticInfo {
  nombreCliente: string;
  serviceId: string;
  userUID: string;
  descripcionCritica: string;
  puntuacion: number;
}

export interface criticData {
  criticId: string;
  criticInfor: criticInfo;
}
