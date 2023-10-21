import React from "react";

interface ImageProps {
  url: string;
  alt: string;
}

const Image: React.FunctionComponent<ImageProps> = ({ url, alt }) => {
  return (
    <div className="bg-stone-100 flex items-center justify-center p-5 rounded-t-lg">
      <img src={url} alt={alt} className="justify-center h-40" />
    </div>
  );
};
export default Image;
