import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import BlogCard from "./BlogCard";
import { Blog } from "@/types/trendBlog";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (prevButtonRef.current && nextButtonRef.current) {
      prevButtonRef.current.classList.add("custom-prev-button");
      nextButtonRef.current.classList.add("custom-next-button");
    }
  }, []);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={28}
        slidesPerView={2}
        loop
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          568: { slidesPerView: 2, spaceBetween: 28 },
          768: { slidesPerView: 3, spaceBetween: 28 },
          1024: { slidesPerView: 4, spaceBetween: 32 },
        }}
      >
        {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
