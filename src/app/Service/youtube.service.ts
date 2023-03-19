import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  api_key="AIzaSyBOV2kjuKbxqb_4jYH9MzRDOURPjWGHgTw";
  video_http="https://www.googleapis.com/youtube/v3/videos";

  constructor(private http:HttpClient) { }

  
  get_data(){
    return this.http.get(this.video_http+this.api_key);
  }
  
  
}
