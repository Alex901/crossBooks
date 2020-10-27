import { ApiService } from './api.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class KeysSample {
  API_KEY = "<Your API Key>";
  AUTH_TOKEN = "<Your auth-token>";
  SERVICE_URI= "https://hu7yj4035d.execute-api.eu-west-1.amazonaws.com/dev/";
}


// In api.service.ts just change Keys. => KeysSample and remove the comment on the import!
