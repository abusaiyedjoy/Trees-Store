import { Typewriter } from 'react-simple-typewriter';

// eslint-disable-next-line react/prop-types
const Title = ({title}) => {
  return (
    <div className="flex items-center justify-center bg-transparent my-2">
      <h1 className="relative overflow-hidden whitespace-nowrap font-semibold p-2 text-3xl md:text-5xl text-[#008037]">
        <Typewriter
          words={[`${title}`]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>
    </div>
  );
};

export default Title;
