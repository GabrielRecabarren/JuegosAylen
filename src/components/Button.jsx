import s from './style.module.css';

export const Button = ({ btnName, btnNum }) => {
  const dynamicClassName = s['btn' + btnNum]; // Concatenamos el nombre de la clase fuera de las llaves

  return (
    <button className={`${s.customBtn} ${dynamicClassName}`}>{btnName}</button>
  );
};
