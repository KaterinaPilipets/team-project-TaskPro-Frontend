import { ButtonBoardFilters } from './ButtonBoardFilters';

// title взять из редакса

export const HeaderDashboard = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '10px 24px 10px 24px',
      }}
    >
      {/* <h3>{title}</h3> */}
      <h3
        style={{
          fontSize: 18,
        }}
      >
        Board name
      </h3>
      <ButtonBoardFilters />
    </div>
  );
};
