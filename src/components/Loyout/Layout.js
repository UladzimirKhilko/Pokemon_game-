import s from "./style.module.css";

const Loyout = ({ title, descr, colorBg, urlBg }) => {
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
          <div className="desc full">
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Loyout;
