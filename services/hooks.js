import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Cập nhật giá trị sau khi delay "delay" ms
      // Hàm này được gọi khi value thay đổi
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        // Nếu value bị thay đổi hàm này được gọi ngay lập tức (unmount)
        // Chính vì vậy cái timeout ở trên sẽ bị xóa bằng hàm clearTimeout
        // Nhưng value thay đổi thì cái useEffect lại tiếp tục được gọi :))
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue; // Giá trị này sẽ bằng value sau delay giây nếu value không thay đổi nữa
}
