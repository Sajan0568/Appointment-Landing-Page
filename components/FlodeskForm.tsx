"use client";

import { useEffect, useRef, useState } from "react";

type FlodeskWindow = Window & {
  __sajanFlodeskUniversalLoaded?: boolean;
  __sajanFlodeskFormHandled?: boolean;
};

/**
 * Loads the unmodified Flodesk embed and re-inserts its scripts so the
 * provider's native capture, validation, tracking, and automation remain active.
 */
export default function FlodeskForm() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function mountEmbed() {
      try {
        const response = await fetch("/flodesk-embed.html");
        if (!response.ok) throw new Error("Unable to load Flodesk embed");
        const html = await response.text();
        if (cancelled || !mountRef.current) return;

        const flodeskWindow = window as FlodeskWindow;
        const rootSelector = '[data-ff-el="root"].ff-6a803f368745edc5b8bd6484';
        const existingRoot = document.querySelector(rootSelector);
        if (existingRoot) {
          if (!mountRef.current.contains(existingRoot)) mountRef.current.appendChild(existingRoot);
          return;
        }

        const template = document.createElement("template");
        template.innerHTML = html;
        const fragment = template.content.cloneNode(true) as DocumentFragment;
        const scripts = Array.from(fragment.querySelectorAll("script"));
        scripts.forEach((script) => script.remove());
        mountRef.current.replaceChildren(fragment);

        // Scripts inserted through innerHTML do not execute. Reinsert them in
        // the original order while leaving their source and inline code intact.
        const universalScript = scripts.find((script) => script.textContent?.includes("w.FlodeskObject"));
        const formHandlerScript = scripts.find((script) => script.textContent?.includes("form:handle"));

        const appendScript = (sourceScript: HTMLScriptElement) => {
          const liveScript = document.createElement("script");
          Array.from(sourceScript.attributes).forEach((attribute) => {
            liveScript.setAttribute(attribute.name, attribute.value);
          });
          liveScript.textContent = sourceScript.textContent;
          document.body.appendChild(liveScript);
        };

        if (universalScript && !flodeskWindow.__sajanFlodeskUniversalLoaded) {
          flodeskWindow.__sajanFlodeskUniversalLoaded = true;
          appendScript(universalScript);
        }
        if (formHandlerScript && !flodeskWindow.__sajanFlodeskFormHandled) {
          flodeskWindow.__sajanFlodeskFormHandled = true;
          appendScript(formHandlerScript);
        }
      } catch {
        if (!cancelled) setLoadError(true);
      }
    }

    mountEmbed();
    return () => { cancelled = true; };
  }, []);

  return <div className="flodesk-wrapper">
    <div ref={mountRef} aria-live="polite" />
    {loadError && <p className="flodesk-error">The consultation form could not load. Please refresh and try again.</p>}
  </div>;
}
