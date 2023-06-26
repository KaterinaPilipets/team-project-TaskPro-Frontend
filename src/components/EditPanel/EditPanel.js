import icon from '../../sourse/sprite.svg';
export const SvgBtn = ({ IdIcon, fn }) => {
  return (
    <button type="button" onClick={fn}>
      <svg width="16" height="16">
        <use xlinkHref={`${icon}#${IdIcon}`} />
      </svg>
    </button>
  );

  //   export const EditPanel = ({ IdIcon, fn }) => {
  //   return iconsEdit.map(el => {
  //     return (
  //       <button type="button" onClick={el.fn}>
  //         <svg width="16" height="16">
  //           <use xlinkHref={`${icon}#${el.name}`} />
  //         </svg>
  //       </button>
  //     );
  //   });
};
