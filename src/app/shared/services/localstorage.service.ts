import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Set an item in localStorage
  setItem(key: string, value: any): void {
    if (isPlatformBrowser(this.platformId)) {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    }
  }

  // Get an item from localStorage
  getItem<T>(key: string): T | null {
    if (isPlatformBrowser(this.platformId)) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) as T : null;
    }
    return null; // Return null if not in browser
  }
}
