import { ReactLenis } from "../components/lenis";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        orientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
}
