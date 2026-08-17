"use client";

import { useEffect, useRef, useState } from "react";

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

        const template = document.createElement("template");
        template.innerHTML = html;
        const fragment = template.content.cloneNode(true) as DocumentFragment;
        const scripts = Array.from(fragment.querySelectorAll("script"));
        scripts.forEach((script) => script.remove());
        mountRef.current.replaceChildren(fragment);

        // Scripts inserted through innerHTML do not execute. Reinsert them in
        // the original order while leaving their source and inline code intact.
        scripts.forEach((sourceScript) => {
          const liveScript = document.createElement("script");
          Array.from(sourceScript.attributes).forEach((attribute) => {
            liveScript.setAttribute(attribute.name, attribute.value);
          });
          liveScript.textContent = sourceScript.textContent;
          document.body.appendChild(liveScript);
        });
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
