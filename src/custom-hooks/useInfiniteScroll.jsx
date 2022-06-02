import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useInfiniteScroll = ({ lastElement, videos }) => {
	const noOfPages = Math.ceil(videos?.length / 6);
	const [pageNum, setPageNum] = useState(0);
	useEffect(() => {
		const elementRef = lastElement.current;
		const handleObserver = (entries) => {
			const target = entries[0];
			if (
				target.isIntersecting &&
				(pageNum < noOfPages || (pageNum === 0 && noOfPages === 0))
			) {
				setPageNum((prev) => prev + 1);
			}
		};
		const observer = new IntersectionObserver(handleObserver);
		if (elementRef) {
			observer.observe(elementRef);
		}

		return () => {
			observer.unobserve(elementRef);
		};
	}, []);

	return { pageNum };
};

export { useInfiniteScroll };
