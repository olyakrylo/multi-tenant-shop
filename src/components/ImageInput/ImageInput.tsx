import React, { useRef } from "react";
import "./ImageInput.css";

interface ImageInputProps {
  initialSrc?: string;
}

export function ImageInput({ initialSrc }: ImageInputProps) {
  const imageElement = useRef(null);

  function updateImage(event: any): void {
    try {
      // @ts-ignore
      imageElement!.current.src = window.URL.createObjectURL(event.nativeEvent.target.files[0]);
    } catch {
      return;
    }
  }

  return (
    <div className="image-input">
      <img ref={imageElement} src={initialSrc} className="image-input__image" alt="" />
      <input type="file" className="image-input__input" onInput={updateImage} />
    </div>
  );
}
