/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PRIVATE_KEY: string;
    readonly VITE_PINATA_JWT: string;
    readonly VITE_GATEWAY_URL: string;
    readonly VITE_GATEWAY_TOKEN: string;
    // Add other environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  