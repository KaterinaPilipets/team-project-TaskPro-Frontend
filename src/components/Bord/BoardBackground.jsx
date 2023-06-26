export const BoardBackground = ({ child1, child2 }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'flex-start',
        wrap: 'nowrap',

        backgroundImage: '//////',
      }}
    >
      {child1}
      {child2}
    </div>
  );
};
