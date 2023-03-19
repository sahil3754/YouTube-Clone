import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  sub1:boolean=true;
  sub2:boolean=false;

  YouTube: any = [
    {
      "link": "https://www.youtube.com/watch?v=Zv11L-ZfrSg",
      "tumb": "https://i.ytimg.com/vi/Zv11L-ZfrSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8vbkC6otF3sdyt-rCM-HdoGr6xw",
      "title":"Ultimate Wild Animals Collection in 8K ULTRA HD"
    },

    {
      "link":"https://www.youtube.com/watch?v=VPvVD8t02U8",
      "tumb":"https://i.ytimg.com/vi/VPvVD8t02U8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGtsbxbaABA-QwThK17YZarEhJyw",
      "title":"Flutter Course for Beginners – 37-hour Cross Platform App Development Tutorial"
    },
    {
      "link":"https://www.youtube.com/watch?v=6mr4cYJ7yew",
      "tumb":"https://i.ytimg.com/vi/6mr4cYJ7yew/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfL9xCB4vUwa55zqyJms5nx43OXg",
      "title":"Kesariya - Film Version | Brahmāstra | Ranbir | Alia"
    },
   
    {
      "link":"https://www.youtube.com/watch?v=mNuhKUOD_A0",
      "tumb":"https://i.ytimg.com/vi/mNuhKUOD_A0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClQkFOzpuSCnx7hg1w0to2KE32vg",
      "title":"Deva Deva - Extended Film Version|Brahmāstra|Amitabh B|Ranbir"
    },

    {
      "link":"https://www.youtube.com/watch?v=chx9Rs41W6g&t=4s",
      "tumb":"https://i.ytimg.com/vi/chx9Rs41W6g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ5qck7VM1_G8DS_QEqMRnNGprvA",
      "title":"JavaScript | Beginning to Mastery Complete Tutorial (Part 1)"
    },

    {
      "link":"https://www.youtube.com/watch?v=SolaR4ohJPU",
      "tumb":"https://i.ytimg.com/vi/SolaR4ohJPU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJDvyuaRTu0A3hB-q75AmJ4NKLKA",
      "title":"12K HDR 120fps Dolby Vision with Calming Music (Color Life)"
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

  subscribe(){
    this.sub1=false;
    this.sub2=true;
  }

}
