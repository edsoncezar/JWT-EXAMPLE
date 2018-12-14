import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * 
 */
export class GenerateTokenService {

  constructor() { }

  generateToken() {

      var encodedData = window.btoa('TOKEN-EXAMPLE' +Math.random().toString(36).slice(-10)); // encode a string

      var jwt = require('jsonwebtoken');
      
      var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 30),
        data: 'foobar'
      }, encodedData);
      
      return token;
  }

}