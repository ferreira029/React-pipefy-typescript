import { createContext } from "react";

interface Props {
  lists: object[];
  move: Function;
}

export default createContext<Props>({
  lists: [{}],
  move() {}
});