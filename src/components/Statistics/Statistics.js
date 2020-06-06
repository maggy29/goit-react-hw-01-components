import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const randomColor = () => "#" + Math.random().toString(16).substr(2, 6);

function Statistics({ title, stats }) {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stats}>
        {stats.map(({ id, label, percentage }) => (
          <li
            style={{ backgroundColor: `${randomColor()}` }}
            className={styles.statsItem}
            key={id}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
