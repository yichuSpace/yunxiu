export {};

// Helper for Volar
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    YunDataTable: typeof import("@yunxiu/yunxiu-ui")["dataTable"];
  }
}
