import React, { useRef } from "react";
import "./ImageInput.css";

interface ImageInputProps {
  initialSrc?: string;
  setImage: (im: string) => void;
}

export function ImageInput({ initialSrc, setImage }: ImageInputProps) {
  const imageElement: React.MutableRefObject<null | HTMLImageElement> = useRef(null);

  function updateImage(event: any): void {
    try {
      const reader = new FileReader();

      reader.readAsDataURL(event.nativeEvent.target.files[0]);
      reader.onloadend = () => {
        const strImage = reader.result as string;
        if (strImage.length > 500000) {
          alert("too big image");
          return;
        }
        setImage(strImage);
        imageElement!.current!.src = strImage;
      };
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
