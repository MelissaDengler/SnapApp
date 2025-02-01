/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEXT_PUBLIC_OPEN_API_KEY: string;
  readonly VITE_COMPANY_NAME: string;
  readonly VITE_COMPANY_DESCRIPTION: string;
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 