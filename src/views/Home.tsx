import { useAuth } from "../context/AuthContext";

export const Home = () => {
  const { user } = useAuth();
  if (!user) return;

  return <div>Home</div>;
};
