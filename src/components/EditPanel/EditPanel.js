import icon from '../../sourse/sprite.svg';
import { useToggleModal } from '../../hooks';
import { Modal } from 'components/Modal';
export const SvgBtn = ({ idIcon, onClick, component }) => {
  const { close, isOpen } = useToggleModal();
  return (
    <>
      <button onClick={onClick}>
        <svg width="16" height="16">
          <use xlinkHref={`${icon}#${idIcon}`} />
        </svg>
      </button>
      {isOpen && <Modal onClose={close}>{component}</Modal>}
    </>
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
