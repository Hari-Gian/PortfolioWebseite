const Example = () => {
  return (
    <div>
      <CutoutTextLoader
        height="450px"
        background="white"
        imgUrl="/imgs/random/11.jpg"
      />
    </div>
  );
};

const CutoutTextLoader = ({
  height = "450px",    // Standardwert
  background = "white",  // Standardwert
  imgUrl = "/imgs/random/default.jpg",  // Standardbild
}) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Example;
