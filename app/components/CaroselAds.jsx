import { Carousel } from "./material-component";

export default function CarouselAds() {
  return (
    <>
      <Carousel
        transition={{ duration: 0.5 }}
        className="rounded-xl lg:max-h-[400px] max-h-[300px] overflow-hidden min-h-auto"
      >
        <img
          src="/ads1.jpg"
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <img
          src="/ads1.jpg"
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <img
          src="/ads1.jpg"
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <img
          src="/ads1.jpg"
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <img
          src="/ads1.jpg"
          alt="image 1"
          className="h-full w-full object-cover "
        />
      </Carousel>
    </>
  );
}
