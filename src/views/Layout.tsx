import { NabBarDoCut } from "../components/NavBarDoCut";
import { MenuL } from "../components/MenuL";
import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";

export const Layout = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  if (!user) return;

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <NabBarDoCut userUID={user.uid} />
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        <MenuL />
        <div style={{ flex: 1, padding: "24px" }}>{children}</div>
      </div>
    </div>
  );
};
