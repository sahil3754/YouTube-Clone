import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../Service/youtube.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: YoutubeService) {

  }


  ngOnInit(): void {
  }


  YouTube: any = [
    {
      "link": "https://www.youtube.com/watch?v=Zv11L-ZfrSg",
      "tumb": "https://i.ytimg.com/vi/Zv11L-ZfrSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8vbkC6otF3sdyt-rCM-HdoGr6xw",
      "logo": "https://yt3.ggpht.com/ytc/AL5GRJXA7M8F4s4ADpT3LI-CNjDRUj-DpoIuyqCbLLvhiQ=s68-c-k-c0x00ffffff-no-rj",
      "title":"Ultimate Wild Animals Collection in 8K ULTRA HD"
    },

    {
      "link":"https://www.youtube.com/watch?v=VPvVD8t02U8",
      "tumb":"https://i.ytimg.com/vi/VPvVD8t02U8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGtsbxbaABA-QwThK17YZarEhJyw",
      "logo":"https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj",
      "title":"Flutter Course for Beginners – 37-hour Cross Platform App Development Tutorial"
    },
    {
      "link":"https://www.youtube.com/watch?v=6mr4cYJ7yew",
      "tumb":"https://i.ytimg.com/vi/6mr4cYJ7yew/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfL9xCB4vUwa55zqyJms5nx43OXg",
      "logo":"https://yt3.ggpht.com/ytc/AL5GRJXBOx88i_f_xIeIsLPpU4578IgJzqInCLWucfI1-Q=s68-c-k-c0x00ffffff-no-rj",
      "title":"Kesariya - Film Version | Brahmāstra | Ranbir | Alia"
    },
   
    {
      "link":"https://www.youtube.com/watch?v=mNuhKUOD_A0",
      "tumb":"https://i.ytimg.com/vi/mNuhKUOD_A0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClQkFOzpuSCnx7hg1w0to2KE32vg",
      "logo":"https://yt3.ggpht.com/ytc/AL5GRJXBOx88i_f_xIeIsLPpU4578IgJzqInCLWucfI1-Q=s68-c-k-c0x00ffffff-no-rj",
      "title":"Deva Deva - Extended Film Version|Brahmāstra|Amitabh B|Ranbir"
    },

    {
      "link":"https://www.youtube.com/watch?v=chx9Rs41W6g&t=4s",
      "tumb":"https://i.ytimg.com/vi/chx9Rs41W6g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ5qck7VM1_G8DS_QEqMRnNGprvA",
      "logo":"https://yt3.googleusercontent.com/ytc/AL5GRJVTu8aFLEw0F0iCyQLXPfC9ROiF9jXRt2_XKMifqQ=s88-c-k-c0x00ffffff-no-rj",
      "title":"JavaScript | Beginning to Mastery Complete Tutorial (Part 1)"
    },

    {
      "link":"https://www.youtube.com/watch?v=SolaR4ohJPU",
      "tumb":"https://i.ytimg.com/vi/SolaR4ohJPU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJDvyuaRTu0A3hB-q75AmJ4NKLKA",
      "logo":"https://yt3.ggpht.com/V3rQmL6b5p0xtM-j-m_Obpvvq9TwPKWUMDcXn11SsCOoNfTzhNw4qlK05ukU0GwSet_uwxk-pQ=s68-c-k-c0x00ffffff-no-rj",
      "title":"12K HDR 120fps Dolby Vision with Calming Music (Color Life)"
    },
   
  ]

  Filters: any = [
    { "name": "All" },
    { "name": "Technology" },
    { "name": "Java" },
    { "name": "Python" },
    { "name": "Angular" },
    { "name": "Entertainment" },
    { "name": "Songs" },
    { "name": "4K UHD" },
    { "name": "JavaScript" },
    { "name": "SpringBoot" },
    { "name": "Flutter" },
    { "name": "C++" },
    { "name": "8K video" },
    { "name": "Time" },
    { "name": "Hacker" },
    { "name": "Cooking" },



  ]






}
