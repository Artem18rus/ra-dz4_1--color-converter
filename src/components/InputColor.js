import React from "react";

function InputColor() {
  const handlerChange = (e) => {
    const { value } = e.target;

    let inputItem = [];
    if (value.length === 7) {
      const hexToRgb = (value) =>
        value
          .replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => "#" + r + r + g + g + b + b
          )
          .substring(1)
          .match(/.{2}/g)
          .map((x) => parseInt(x, 16));

      inputItem.push(hexToRgb(value));
    }

    let colorInput;
    let containerItem = document.querySelector(".container");
    if (inputItem.length > 0) {
      colorInput = inputItem.map((item) => `rgb(${item})`);

      containerItem.style.background = colorInput;
    } else {
      containerItem.style.background = "none";
    }

    let readerRgb = document.querySelector(".readerRgb");
    if (readerRgb && colorInput && value.length === 7) {
      readerRgb.innerText = colorInput;
    } else {
      readerRgb.innerText = "";
    }

    let regexp = /^#[0-9a-f]{6}/i;
    if (value.length >= 7 && regexp.test(value) === false) {
      readerRgb.innerText = "Ошибка!";
      containerItem.style.background = "none";
    }
  };

  //#9921ff

  return (
    <form className="classForm">
      <input
        className="inputText"
        placeholder="Введите цвет"
        defaultValue=""
        onChange={handlerChange}
      />
      <div className="readerRgb"></div>
    </form>
  );
}

export default InputColor;
