import cn from "classnames";
import s from "./style.module.css";

const Loyout = ({ title, colorBg, urlBg, children }) => {
  console.log(urlBg);
  const bg = urlBg
    ? { background: `url(${urlBg})` }
    : { background: `${colorBg}` };
  return (
    <section className={s.root} style={bg}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={cn(s.desc, s.full)}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Loyout;
