import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class KeysSample {
  API_KEY = "<x-api-key>";
  AUTH_TOKEN = "<x-authorization>";
  SERVICE_URI= "<service-uri>";
}


// In book.service.ts just change Keys. => KeysSample and remove the comment on the import!
