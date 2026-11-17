import { useEffect, Component } from "react";
import "@/App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A0A0C] text-white flex items-center justify-center">
          <p className="text-zinc-400">Something went wrong. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    let lenis;
    let raf;
    let cancelled = false;
    import("lenis")
      .then(({ default: Lenis }) => {
        if (cancelled) return;
        lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        window.__lenis = lenis;
        const loop = (t) => {
          lenis.raf(t);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Home />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#121216",
              border: "1px solid #27272a",
              color: "#ffffff",
            },
          }}
        />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
