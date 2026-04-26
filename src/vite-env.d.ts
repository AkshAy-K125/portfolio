/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_NISR_PASSWORD: string;
  readonly VITE_NISR_QUOTE_818_PASSWORD: string;
  readonly VITE_NISR_QUOTE_818_TIMELINE_PASSWORD: string;
  readonly VITE_NISR_QUOTE_826_PASSWORD: string;
  readonly VITE_NISR_QUOTE_826_TIMELINE_PASSWORD: string;
  readonly VITE_NISR_QUOTE_837_PASSWORD: string;
  readonly VITE_NISR_QUOTE_916_PASSWORD: string;
  readonly VITE_NISR_QUOTE_917_PASSWORD: string;
  readonly VITE_NISR_QUOTE_818_FINAL_REPORT_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}
declare module '*.avif' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const value: string;
  export default value;
}
declare module '*.glsl' {
  const value: string;
  export default value;
}
