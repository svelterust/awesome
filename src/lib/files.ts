import { FileStorage } from "@flystorage/file-storage";
import { LocalStorageAdapter } from "@flystorage/local-fs";

// Create storage with adapter
const adapter = new LocalStorageAdapter(`${process.cwd()}/files`, {
  publicUrlOptions: {
    baseUrl: "/files",
  },
});
export const files = new FileStorage(adapter);
