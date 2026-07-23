"use client";

import dynamic from "next/dynamic";

const BuildArtifactCanvas = dynamic(() => import("./BuildArtifactCanvas"), {
  ssr: false,
  loading: () => <span className="build-artifact-fallback" aria-hidden="true" />,
});

export default function BuildArtifact() {
  return (
    <div className="build-artifact" aria-hidden="true">
      <BuildArtifactCanvas />
    </div>
  );
}
