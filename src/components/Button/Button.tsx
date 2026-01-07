import style from './button.module.scss';

interface Button {
  action: () => void;
  size: string;
  theme: string;
  text: string;
}

export function Button({ action, size, theme, text }: Button) {
  const classes = [size ? style[`btn-${size}`] : '', theme === 'light' ? style['btn-light'] : style['btn-dark']].join(
    ' '
  );

  return (
    <button className={classes} onClick={action}>
      {text}
    </button>
  );
}
