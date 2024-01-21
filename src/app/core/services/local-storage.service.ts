import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private encrypt(value: string) {
    return btoa(encodeURIComponent(value));
  }

  private decrypt(value: string | null) {
    if (!value || !value.length) return value;
    return decodeURIComponent(atob(value));
  }

  parse(value: any) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }

  toString(value: any) {
    return JSON.stringify(value);
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, this.encrypt(this.toString(value)));
  }

  getItem(key: string) {
    const value = localStorage.getItem(key);
    if (!value) return null; 
    const decryptedValue = this.decrypt(value);
    return this.parse(decryptedValue);
  }
}
