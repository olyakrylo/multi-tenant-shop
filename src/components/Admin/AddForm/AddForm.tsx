import React, { useState } from "react";
import "./AddForm.css";
import { StatusCheckbox } from "../StatusCheckbox/StatusCheckbox";

interface AddFormProps {
  setAddOpened: (val: boolean) => void;
}

export function AddForm({ setAddOpened }: AddFormProps) {
  const [available, setAvailable] = useState(true);

  function updateImage(event: any): void {
    const image = window.URL.createObjectURL(event.nativeEvent.target.files[0]);
    const imageElement = document.querySelector(".form__image-item") as HTMLImageElement;
    imageElement!.src = image;
  }

  return (
    <form className="add__form">
      <div className="form-field form__name">
        <span className="form-field__title">name</span>
        <input className="form-field__input" />
      </div>

      <div className="form__price">
        <div className="form-field">
          <span className="form-field__title">price</span>
          <input className="form-field__input" />
        </div>

        <select className="form__select">
          <option value="₽">₽</option>
          <option value="$">$</option>
          <option value="€">€</option>
        </select>
      </div>

      <StatusCheckbox available={available} setAvailable={setAvailable} />

      <div className="form__buttons">
        <button className="form__btn form__btn_solid">Add</button>
        <button className="form__btn form__btn_transparent" onClick={() => setAddOpened(false)}>
          Cancel
        </button>
      </div>

      <div className="form__image">
        <img className="form__image-item" alt="" style={{ width: 230, height: 230 }} />
        <input type="file" className="form__image-input" onInput={updateImage} />
      </div>
    </form>
  );
}
