import React, { useEffect } from "react";

interface tableProps {
  storeId: string;
}

export const CitaHoy: React.FC<tableProps> = ({ storeId }) => {
  useEffect(() => {}, [storeId]);

  return <div>CitaHoy</div>;
};
