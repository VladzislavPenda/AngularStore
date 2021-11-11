import { Injectable } from '@angular/core';

function createReplacerFunction(
  target: any,
  key: string | number,
  ref: string | number
) {
  return (map: Map<string | number, any>) => {
    target[key] = map.get(ref);
  };
}

@Injectable({
  providedIn: 'root',
})
export class JsonRefLinkService {
  public link(dto: any) {
    const map = new Map<number | string, any>();
    const replacers: ((map: Map<string | number, any>) => void)[] = [];

    function collect(value: any) {
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            if (typeof value[i] === 'object' && value[i] !== null) {
              if ('$ref' in value[i])
                replacers.push(createReplacerFunction(value, i, value[i].$ref));
              else collect(value[i]);
            }
          }
        } else {
          if ('$id' in value && value.$id !== null)
            map.set(value.$id, value.$values || value);

          for (const key of Object.keys(value)) {
            if (typeof value[key] === 'object' && value[key] !== null) {
              if ('$ref' in value[key])
                replacers.push(
                  createReplacerFunction(value, key, value[key].$ref)
                );
              else collect(value[key]);
            }
          }
        }
      }
    }

    dto = JSON.parse(JSON.stringify(dto));
    collect(dto);
    for (const replacer of replacers) replacer(map);
    dto = replaceLists(dto);
    return dto;
  }
}

function replaceLists(value: any): any {
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (
          typeof value[i] === 'object' &&
          value[i] !== null &&
          '$values' in value[i]
        ) {
          value[i] = replaceLists(value[i].$values);
        }
      }
    } else {
      if ('$values' in value) return replaceLists(value.$values);
    }
  }
  return value;
}
