import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import App from "./App";

export function render(url: string): { html: string; helmet: FilledContext["helmet"] } {
  const helmetContext: Partial<FilledContext> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App bare />
      </StaticRouter>
    </HelmetProvider>
  );

  return {
    html,
    helmet: (helmetContext as FilledContext).helmet,
  };
}
