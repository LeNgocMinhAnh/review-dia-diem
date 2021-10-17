import StarRatings from "react-star-ratings";
import { useState, createRef, useCallback } from "react";
import { postReview, uploadImages } from "../../services/api";

export default function ReviewForm({ visible, place, hideRatingShow }) {
  const [star, setStar] = useState(5);
  const [images, setImages] = useState([]);

  const titRef = createRef();
  const contentRef = createRef();
  const incognitoRef = createRef();

  const fileInputRef = createRef();
  const onClickAttachImage = useCallback (() => {
    fileInputRef.current?.click();
  })
  const onImageSelected = useCallback((event) => {
    const files = [];
    for (let i = 0; i < Math.min(event.target.files.length, 5); i++){
      files.push(event.target.files[i]);
    }
    console.log(files)
    setImages(files);
  }, [])

  const submitReview = useCallback(async(event) => {
    event.preventDefault();
    const uploadedImages = [];
    // Upload hình
    if(images.length>0){
      const { data, status: uploadStatus } = await uploadImages(images);
      if (uploadStatus === 201){
        uploadedImages.push(...data);
      }
      
    }

    const { status } = await postReview(
      place.slug,
      {
        star, 
        title: titRef.current?.value,
        content: contentRef.current?.value,
        incognito: incognitoRef.current?.checked,
        images: uploadedImages
      }
      
    )
    if (status === 201) {
      console.log(status)
      window.location.reload();
    }
  }, [images, place, titRef, contentRef, star, incognitoRef]);

  if (!visible) {
    return null;
  }
  return (
    <div className=" transition-all duration-500 fixed backdrop-opacity-50 bg-black bg-opacity-70 inset-0 z-99">
    <div className="flex justify-center h-screen items-center antialiased">
      <div
        className=" flex bg-gray-50 flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
        <div
          className="flex flex-row justify-between px-6 py-4 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <span className="font-semibold text-gray-600 w-full truncate">Review <span className="font-bold text-gray-800">{place.name}</span></span>
          <div className="cursor-pointer" onClick={hideRatingShow}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="flex overflow-y-auto form-content flex-col px-6 bg-gray-50">
          <div className="py-5 mt-2 mx-auto">
            <StarRatings
              changeRating={setStar}
              rating={star}
              starRatedColor="#FF9529"
              starDimension="40px"
              starSpacing="4px"
              svgIconViewBox="0 0 20 20"
              svgIconPath="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              numberOfStars={5}
            />
          </div>
          <p className="mb-2 font-semibold text-gray-700">Tiêu đề</p>
          <input
            type="text"
            name=""
            placeholder="Nhập tiêu đề review"
            className="p-3 mb-5 bg-white border border-gray-200 rounded shadow-sm"
            id=""
            ref={titRef}
          />
          <p className="mb-2 font-semibold text-gray-700">Nội dung</p>
          
            <div className="w-full flex"><textarea
              type="text"
              name=""        
              placeholder="Nhập nội dung review, tối thiểu 10 ký tự..."
              className="w-full p-5 mb-5 h-24 min-h-24 bg-white border border-gray-200 rounded shadow-sm h-36"
              id=""
              ref={contentRef}
            /></div>
          <div className="flex items-center justify-between select-none">
            <div className="flex items-center mb-3 space-x-2">
              <input
                className="inline-flex rounded-full cursor-pointer"
                type="checkbox"
                id="check1"
                name="check1"
                ref={incognitoRef}
              />
              <label className="inline-flex font-semibold text-gray-700 cursor-pointer" htmlFor="check1">
                Đăng ẩn danh
              </label>
            </div>
            <div onClick={onClickAttachImage} className="flex items-center mb-3 space-x-1 text-blue-600 hover:text-blue-900">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464.059,61.567c-63.811-63.814-167.646-63.814-231.468,0L34.183,259.974c-45.579,45.584-45.576,119.753,0.006,165.334
                    c22.793,22.793,52.723,34.189,82.665,34.186c29.934-0.003,59.88-11.396,82.669-34.186l181.868-181.873
                    c13.25-13.248,20.548-30.863,20.55-49.599c0-18.737-7.295-36.351-20.547-49.603c-27.352-27.349-71.856-27.348-99.202,0.005
                    L163.257,263.17c-9.131,9.13-9.131,23.935-0.002,33.067c9.13,9.133,23.935,9.13,33.067,0l118.936-118.933
                    c9.117-9.117,23.949-9.119,33.067-0.002c4.416,4.416,6.849,10.288,6.849,16.533c0,6.245-2.432,12.115-6.849,16.533L166.456,392.24
                    c-27.351,27.348-71.851,27.352-99.2,0.002c-27.349-27.351-27.351-71.853-0.005-99.204L265.658,94.634
                    c45.586-45.584,119.755-45.584,165.334,0c22.083,22.08,34.245,51.439,34.245,82.666s-12.163,60.586-34.245,82.668l-198.404,198.41
                    c-9.13,9.131-9.13,23.935,0.002,33.067c4.566,4.567,10.55,6.848,16.533,6.848c5.984,0,11.968-2.284,16.534-6.848l198.401-198.409
                    c30.916-30.913,47.941-72.015,47.942-115.735C512,133.582,494.974,92.48,464.059,61.567z"/>
                </svg>
                <label className="inline-flex font-semibold cursor-pointer">
                  Đính kèm ảnh
                </label>
              </div>
              <input ref={fileInputRef} onChange={onImageSelected} type='file' className="hidden" multiple accept="image/*" />

          </div>
          {
              images.map((image, index) => (
                <div key={index.toString()}>
                  <div className="flex flex-row items-center justify-between p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm">
                    <div className="flex flex-row items-center">
                      <img
                        className="h-32 rounded-md"
                        src={URL.createObjectURL(image)}
                        alt="Ảnh đính kèm"
                      />
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
        <div
          className="flex flex-row items-center justify-between py-4 px-6 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <p onClick={hideRatingShow} className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800">Hủy</p>
          <button  onClick={submitReview} className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
            Đăng
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
