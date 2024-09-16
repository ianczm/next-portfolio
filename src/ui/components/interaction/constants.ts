import { Elastic, Power4 } from "gsap";

export namespace Magnetism {
  export const DEFAULT_INFLUENCE = 5;
  export const RATIO = {
    magnetize: {
      ease: Power4.easeOut,
      duration: 0.75,
    },
    demagnetize: {
      ease: Elastic.easeOut,
      duration: 0.75,
    },
  };
}
