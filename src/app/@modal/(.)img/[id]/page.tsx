import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import Image from "next/image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);
  return (
    <Modal>
      <div className="flex h-screen w-screen items-center justify-center">
        <Image
          src={image.url}
          style={{ objectFit: "contain" }}
          fill
          alt={image.name}
        />
      </div>
    </Modal>
  );
}
