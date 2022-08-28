import { useEffect, useRef, useState } from 'react';
// import { debounce } from 'lodash';

// export const useResizeCount = () => {
//   const [resizeCount, setResizeCount] = useState(0);
//   const browserWidth = useRef(0);

//   const handleResize = debounce(() => {
//     browserWidth.current !== window.innerWidth && setResizeCount((prev) => prev + 1);
//     browserWidth.current = window.innerWidth;
//   }, 500);

//   useEffect(() => {
//     browserWidth.current = window.innerWidth;
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return { resizeCount };
// };

// export default useResizeCount;
