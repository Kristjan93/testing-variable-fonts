import { ReactLenis } from "../components/lenis";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        orientation: "horizontal",
        lerp: 0.075,
      }}
    >
      {children}
    </ReactLenis>
  );
}
