import { useState, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const HorizontalScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const data = [
    { img: './public/1.png' },
    { img: './public/2.png' },
    { img: './public/3.png' },
  ];

  const slideLeft = () => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const slideRight = () => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.offsetWidth;
      const scrollToPosition = index * itemWidth;
      sliderRef.current.scrollTo({
        left: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = (event) => {
    const slider = event.target;
    const itemsPerPage = 3; // Adjust this value as needed

    if (slider.scrollLeft === 0) {
      // Reached the beginning, prepend data from the end
      const newData = [...data.slice(data.length - itemsPerPage), ...data];
      setData(newData);
      setCurrentIndex(itemsPerPage);
    } else if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      // Reached the end, append data from the beginning
      const newData = [...data, ...data.slice(0, itemsPerPage)];
      setData(newData);
      setCurrentIndex(data.length - itemsPerPage + 1);
    }
  };

  return (
    <>
      <div className="bg-gray-200 object-cover relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          ref={sliderRef}
          className="w-full h-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          onScroll={handleScroll}
        >
          {data.map((item, index) => (
            <img
              key={index}
              className="inline-block cursor-pointer hover:scale-105 ease-in-out p-2 rounded-3xl duration-300"
              src={item.img}
              alt=""
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
};

export default HorizontalScroll;