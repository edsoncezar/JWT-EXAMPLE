import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateTokenService {

  constructor() { }

  generateToken() {

      var encodedData = window.btoa('TOKEN-EXAMPLE' +Math.random().toString(36).slice(-10)); // encode a string

      return encodedData;
  }

}