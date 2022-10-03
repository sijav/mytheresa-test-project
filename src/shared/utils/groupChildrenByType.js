import {Children, isValidElement} from 'react';

export function groupChildrenByType(children, components) {
  const componentsSet = new Set(components);
  const map = new Map();
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (componentsSet.has(child.type)) {
        map.set(child.type, child.props.children);
      }
    }
  });
  return map;
}
