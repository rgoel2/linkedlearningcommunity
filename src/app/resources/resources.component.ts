import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resources = [
  {
    title: "United States Environmental Protection Agency",
    link: "https://www.epa.gov/",
    description: "The Environmental Protection Agency is an independent agency of the United States federal government for environmental protection. The agency conducts environmental assessment, research, and education. It has the responsibility of maintaining and enforcing national standards under a variety of environmental laws, in consultation with state, tribal, and local governments. The agency also works with industries and all levels of government in a wide variety of voluntary pollution prevention programs and energy conservation efforts."
  },
  {
    title: "North American Association for Environmental Education",
    link: "https://naaee.org/",
    description: "NAAEE’s influence stretches across North America and around the world, with members in more than 30 countries. NAAEE and its 54 state, provincial, and regional Affiliate organizations in the United States, Canada, and Mexico have more than 16,000 members. These members are professionals with environmental education responsibilities and interests across business, government, higher education, formal (K–12) education, nonformal education, early childhood education, science education and STEM, and other sectors of society."
  },
  {
    title:"Linked Learning Alliance",
    link:"https://www.linkedlearning.org/",
    description:"Linked Learning is a successful approach to education based on the idea that students work harder and dream bigger if their education is relevant to them. Linked Learning exposes high school students to previously unimagined college and career opportunities by turning their education into a personally relevant, engaging experience. Research shows that Linked Learning students have higher rates of engagement and higher graduation rates than their peers at traditional high schools. This approach to education is helping to create a disciplined, prepared, and productive future workforce, ready to succeed in college, career, and life."
  },
  {
    title: "EELearning Community",
    link: "http://www.eelearningcommunity.org/",
    description:"The primary goals of building this learning community are to Generate awareness and civic responsibility toward environmental education and sustainable energy solutions and how they impact urban environment in particular, Provide training (technology tools, resources and strategies) and opportunities to create collaborative partnerships among formal and non-formal environmental and energy educators in California. This learning community will include formal (K-15), non-formal (museums, parks, zoos, community gardens, sustainable housing etc), and non-profit organizations, in California who are all working in the area of a service learning and environmental & energy education."
  }
  ]
}
