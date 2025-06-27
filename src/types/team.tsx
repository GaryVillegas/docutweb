export interface memberInfo {
  nombreMiembro: string;
  apellidoMiembro: string;
  especialidad: string;
  storeId: string;
  horaEntrada: string;
  horaSalida: string;
}

export interface memberData {
  memberUID: string;
  memberInfo: memberInfo;
}
