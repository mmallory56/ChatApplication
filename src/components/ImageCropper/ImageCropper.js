import React from 'react'
import Cropper from 'react-cropper'
import "cropperjs/dist/cropper.css";
const ImageCropper = () => {
     const cropperRef = React.useRef<HTMLImageElement>(null);
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    console.log(cropper.getCroppedCanvas().toDataURL());
  };
    return (
          <Cropper
      src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
      style={{ height: 400, width: "100%" }}
      // Cropper.js options
      initialAspectRatio={16 / 9}
      guides={false}
      crop={onCrop}
      ref={cropperRef}
    />
    )
}

export default ImageCropper
