// import { ColumnTask } from 'components/Board/ColumnTask/ColumnTask';
import { Board } from 'components/Board/Board';

// const tasksArray = [
//   {
//     id: '1',
//     // titleColumn: '1col',or id
//     name: 'The Watch Spot Design1',
//     discription: `Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.`,
//     priority: 'Low',
//     deadline: '12 / 05 / 2023',
//   },
//   {
//     id: '2',
//     // titleColumn: '2col',or id
//     name: 'The Watch Spot Design2',
//     discription: `Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.`,
//     priority: 'High',
//     deadline: '12 / 05 / 2023',
//   },
// ];

const HomePage = () => {
  return (
    <div>
      <Board />
      {/* <ColumnTask tasksArray={tasksArray} titleColumn="titleColumn" /> */}
    </div>
  );
};
export default HomePage;
