import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { 
  }

  private encrypt(value: string) {
    return btoa(value);
  }

  private decrypt(value: string | null) {
    if (!value || !value.length) return value;
    return atob(value);
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value))
  }

  getItem(key: string) {
    const value = this.decrypt(localStorage.getItem(key))
    return value;
  }

}
