import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  department=[
    {
      id:1,
      title:"Aerospace & Defence",
      image:"https://i.postimg.cc/C5cwhpTH/Rectangle-20-1.jpg",
      description:" Advanced solutions enhancing operational efficiency, safety, and innovation in aerospace and defence sectors.",
      link:"aerospace"
    },
    {
      id:2,
      title:"Banking and Financial Services",
      image:"https://i.postimg.cc/rFhpcxqX/Rectangle-20-2.jpg",
      description:"Cutting-edge technologies for secure, efficient, and customer-centric banking and financial services.",
      link:"banking"
    },
    {
      id:3,
      title:"Healthcare",
      image:"https://i.postimg.cc/dtQ0z4Pj/Rectangle-20-1.jpg",
      description:"Innovative digital solutions transforming patient care, medical data management, and healthcare operations.",
      link:"healthcare"
    },
    {
      id:4,
      title:"Insurance",
      image:"https://i.postimg.cc/nhDf5Dz1/Rectangle-20-3.jpg",
      description:"Comprehensive digital services optimizing claims processing, policy management, and customer engagement.",
      link:"insurance"
    },
    {
      id:5,
      title:"Locomotive",
      image:"https://i.postimg.cc/Nj3BfxVV/Rectangle-20-2.jpg",
      description:"Modernizing locomotive systems for improved safety, performance, and operational efficiency.",
      link:"locomotive"
    },
    {
      id:6,
      title:"Industrial",
      image:"https://i.postimg.cc/GhNHGGVP/rectangle-20.png",
      description:" Smart technologies driving automation, productivity, and efficiency in industrial operations.",
      link:"industrial"
    },
    {
      id:7,
      title:"Mobility",
      image:"https://i.postimg.cc/bvnYQ5kp/Rectangle-20.jpg",
      description:"Advanced mobility solutions ensuring seamless connectivity, user engagement, and flexibility for businesses and individuals.",
      link:"mobility"
    },
    {
      id:8,
      title:"Security",
      image:"https://i.postimg.cc/Vk3XF3rN/Rectangle-85-1-Copy.jpg",
      description:"Robust cybersecurity measures protecting data, infrastructure, and operations across industries.",
      link:"security"
    }
    ];
}
