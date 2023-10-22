import React from "react";

interface ImageProps {
  url: string;
  alt: string;
}

const Image: React.FunctionComponent<ImageProps> = ({ url, alt }) => {
  return (
    <div className="flex justify-center border-2 border-amber-100 p-5 rounded-t-lg bg-gradient-to-br from-cyan-200 to-amber-100">
      <img src={url} alt={alt} className="justify-center h-40" />
    </div>
  );
};
export default Image;
