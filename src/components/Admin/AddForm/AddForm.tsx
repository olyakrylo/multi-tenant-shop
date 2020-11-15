import React, { useState } from "react";
import "./AddForm.css";
import { StatusCheckbox } from "../StatusCheckbox/StatusCheckbox";
import { ImageInput } from "../../ImageInput/ImageInput";

interface AddFormProps {
  setAddOpened: (val: boolean) => void;
}

export function AddForm({ setAddOpened }: AddFormProps) {
  const [available, setAvailable] = useState(true);

  return (
    <form className="add__form">
      <div className="form-field form__name">
        <span className="form-field__title">name</span>
        <input className="form-field__input" />
      </div>

      <div className="form-field form__price">
        <span className="form-field__title">price</span>
        <input className="form-field__input" />
      </div>

      <StatusCheckbox available={available} setAvailable={setAvailable} />

      <div className="form__buttons">
        <button className="form__btn form__btn_solid">Add</button>
        <button className="form__btn form__btn_transparent" onClick={() => setAddOpened(false)}>
          Cancel
        </button>
      </div>

      <div className="form__image">
        <ImageInput />
      </div>
    </form>
  );
}
