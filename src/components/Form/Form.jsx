import React, { useState } from "react";
import Companies from "../Companies/Companies";
import styles from "./Form.module.scss";
import { useSelector } from "react-redux";

const Form = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const companies = useSelector((state) => state.companies);
  const companiesFilt = companies.filter((item) => {
    return (
      item.name.toLowerCase().includes(value.toLowerCase().toString()) ||
      item.domain.toLowerCase().includes(value.toLowerCase().toString())
    );
  });

  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h6>Компания</h6>
        <form>
          <input
            type="text"
            value={value}
            placeholder="Search in the company..."
            onChange={(e) => setValue(e.target.value)}
            onClick={inputClickHandler}
          />
          <ul className={styles.autocomplete}>
            {value && isOpen
              ? companiesFilt.map((company, index) => {
                  return (
                    <li
                      key={index}
                      className={styles.autocompleteItem}
                      onClick={itemClickHandler}
                    >
                      {company.name}
                    </li>
                  );
                })
              : null}
          </ul>
        </form>
        <Companies
          value={value}
          setValue={setValue}
          itemClickHandler={itemClickHandler}
        />
      </div>
    </div>
  );
};

export default Form;
