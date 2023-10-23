import type { ComponentPropsWithoutRef } from "react";
import { generateComponents } from "@uploadthing/react";
import { UploadCloudIcon } from "lucide-react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { Button } from "./button";
import { Loading } from "./loading";

const { UploadDropzone: UploadDropzonePrimitive } =
  generateComponents<OurFileRouter>();

export function UploadDropzone(
  props: ComponentPropsWithoutRef<typeof UploadDropzonePrimitive>,
) {
  return (
    <UploadDropzonePrimitive
      className="ut-upload-icon:hidden flex-row rounded-lg border border-dotted border-neutral-6 px-10 transition-colors hover:cursor-pointer hover:border-neutral-7"
      content={{
        label(arg) {
          return (
            <Button type="button" variant="ghost">
              {arg.isUploading ? <Loading /> : <UploadCloudIcon />}
              Enviar arquivo
            </Button>
          );
        },
      }}
      config={{
        appendOnPaste: true,
      }}
      {...props}
    />
  );
}
