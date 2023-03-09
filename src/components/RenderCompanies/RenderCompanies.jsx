import styles from "./RenderCompanies.module.scss";

const RenderCompanies = ({ item, itemClickHandler }) => {
  return (
    <li>
      <div className={styles.imgSize}>
        <img src={item.logo} alt={item.name} />
      </div>
      <div className={styles.titleAndDomain}>
        <div className={styles.title} onClick={itemClickHandler}>
          {item.name}
        </div>
        <div className={styles.domain} onClick={itemClickHandler}>
          {item.domain}
        </div>
      </div>
    </li>
  );
};

export default RenderCompanies;
