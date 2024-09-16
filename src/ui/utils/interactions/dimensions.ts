import { Vector2 } from "three";

export function getCursorPos(e: MouseEvent) {
  const { clientX, clientY } = e;
  return new Vector2(clientX, clientY);
}

type ElementDimensions = {
  topLeft: Vector2;
  dimensions: Vector2;
  center: Vector2;
};

export function getElementDimensions(element: HTMLElement): ElementDimensions {
  const { width, height, left, top } = element.getBoundingClientRect();

  const topLeft = new Vector2(left, top);
  const dimensions = new Vector2(width, height);
  const center = topLeft.add(dimensions.divideScalar(2));

  return {
    topLeft,
    dimensions,
    center,
  };
}

export function getDirection(cursor: Vector2, center: Vector2) {
  return cursor.sub(center);
}

export function normalizeDirection(direction: Vector2, dimensions: Vector2) {
  return direction.divide(dimensions.divideScalar(2));
}

export class MouseEventElementWrapper {
  cursor: Vector2;
  elementDimensions: ElementDimensions;

  static create(mouseEvent: MouseEvent, element: HTMLElement) {
    return new MouseEventElementWrapper(mouseEvent, element);
  }

  constructor(mouseEvent: MouseEvent, element: HTMLElement) {
    this.cursor = getCursorPos(mouseEvent);
    this.elementDimensions = getElementDimensions(element);
  }

  getDirectionToCursor() {
    return getDirection(this.cursor, this.elementDimensions.center);
  }

  getNormalizedDirectionToCursor() {
    return normalizeDirection(this.getDirectionToCursor(), this.elementDimensions.dimensions);
  }
}
