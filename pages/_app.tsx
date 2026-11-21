import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/context/ThemeContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ErrorBoundary fallbackTitle="Portfolio Navigation & Experience">
        <CustomCursor />
        <Component {...pageProps} />
        <Analytics />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
