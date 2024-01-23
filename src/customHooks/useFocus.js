import { useEffect } from "react";

export function useFocus(ref, ...state) {
  useEffect(
    function () {
      ref.current.focus();
    },
    [ref, state]
  );
}
