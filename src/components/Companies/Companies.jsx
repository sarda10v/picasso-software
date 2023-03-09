import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies } from "../../features/companiesSlice";
import RenderCompanies from "../RenderCompanies/RenderCompanies";
import styles from "./Companies.module.scss";

const Companies = ({ value, itemClickHandler }) => {
  const companies = useSelector((state) => state.companies);
  const loader = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  const companiesFilt = companies.filter((item) => {
    return (
      item.name.toLowerCase().includes(value.toLowerCase().toString()) ||
      item.domain.toLowerCase().includes(value.toLowerCase().toString())
    );
  });

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <div className={styles.wrapperContent}>
      <ul>
        {loader ? <div className={styles.loader}>Идет загрузка...</div> : null}
        {companiesFilt.length && !loader ? (
          companiesFilt.map((item, index) => {
            return (
              <RenderCompanies
                key={index}
                item={item}
                itemClickHandler={itemClickHandler}

              />
            );
          })
        ) : (
          <div className={styles.loader}>Ничего нет(</div>
        )}
      </ul>
    </div>
  );
};

export default Companies;
