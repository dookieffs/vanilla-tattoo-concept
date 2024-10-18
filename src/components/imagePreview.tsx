"use client";

import { useEffect, useRef } from "react";

const GalleryPreview: React.FC<{ selector: string }> = ({ selector }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const closeDialog = () => {
    if (dialogRef.current) {
      //@ts-ignore
      dialogRef.current.style.display = "none";
      //@ts-ignore
      imageRef.current.src = "";
      dialogRef.current.close();
    }
  };
  useEffect(() => {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener("click", () => {
        //@ts-ignore
        imageRef.current.src = element.src;
        //@ts-ignore
        dialogRef.current.style.display = "flex";
        //@ts-ignore
        dialogRef.current.showModal();
      });
    });
  }, []);

  return (
    <dialog
      ref={dialogRef}
      style={{
        display: "none",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        margin: 0,
        /*  top: "-19px",
        left: "-36px",
        bottom: "-19px",
        right: "-36px", */
        background: "rgba(0, 0, 0, 0.8)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000",
        minWidth: "100%",
        minHeight: "100%",
        overflow: "hidden",
      }}
    >
      <div className="relative p-0 m-0 max-w-screen-lg rounded-md m-auto">
        <button
          onClick={closeDialog}
          className="absolute top-2 right-2 cursor-pointer w-6 h-6 text-[#C09A63] text-2xl outline-none"
        >
          ✕
        </button>
        <img ref={imageRef} className="w-full h-auto" alt="Full-size preview" />
      </div>
    </dialog>
  );
};

// Create a function to open the dialog from outside the component

const useGalleryPreview = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const openDialog = (imageSrc: string) => {
    if (dialogRef.current && imageRef.current) {
      imageRef.current.src = imageSrc;
      dialogRef.current.showModal();
    }
  };

  return { openDialog, dialogRef, imageRef };
};

export { GalleryPreview, useGalleryPreview };
