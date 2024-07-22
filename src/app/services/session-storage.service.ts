import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  get<T>(key: string): T | null {
    const item = this.document.defaultView?.sessionStorage?.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  set(key: string, value: unknown): void {
    this.document.defaultView?.sessionStorage?.setItem(
      key,
      JSON.stringify(value)
    );
  }

  remove(key: string): void {
    this.document.defaultView?.sessionStorage?.removeItem(key);
  }

  clear(): void {
    this.document.defaultView?.sessionStorage?.clear();
  }
}
