const NextImage = ({ src, alt, ...props }: any) => {
  return (
    <img src={typeof src === "string" ? src : src.src} alt={alt} {...props} />
  );
};
export default NextImage;
