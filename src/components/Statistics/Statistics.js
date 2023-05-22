import s from './Statistic.module.css';
import PropTypes from 'prop-types';
function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <div className={s.stat__cont}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.stats__menu}>
          {stats.map(({ id, label, percentage }) => (
            <li key={id} className={s.stat__menu__list}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
