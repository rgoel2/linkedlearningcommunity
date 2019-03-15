import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  mainContent = [
  'Linked Learning is a California statewide initiative (funded by the James Irvine Foundation) that combines rigorous academics, work-based learning, career and technical education (CTE), and student supports to prepare them for academic college, career, and life. The focus of our research is how to use a systems approach to create sustainable social change via Linked Learning community engagement by helping to build a Virtual Community of Practice (vCoP) using current technology, theories, and models that support Linked Learning teachers and students within the Green Pathway areas of Environment, Sustainability, Energy, and Transportation in urban schools in Los Angeles.',

  'This systems approach will involve sharing the best practices, projects and lessons learned by all the stakeholders within the Green Pathways Community of Practice via an interactive mobile app (m-CoP); which will link all Linked Learning stake holders within the environmentally sustainability domain. The major outcome of this m-CoP will be sustainability via social interactions, life-long learning, connections, sharing of best practices (using multimedia), access to resources, community participation, access to internships and collaborations among college students’ and Linked Learning Pathway students.',

  'We believe that LAUSD Green Pathways schools will create tremendous value from a virtual community of practice that promotes a network dedicated to their success through consistent information sharing, collaboration, and participatory knowledge generation.'
  ]

team = [
    {
      name:'Dr. Manisha Javeri',
      content:[
        'Dr. Manisha Javeri is a Professor at California State University, Los Angeles (CSULA). Her background is in Physical Chemistry and has taught at the University in Mumbai, India before moving to U.S.A in 1999. She joined CSULA in 2003 after completing her Ph.D in Educational Technology from the University of Northern Colorado, Greeley. Her philosophy of education has evolved over the years of teaching experience (almost 22 years) both and has an influence of both the eastern and western culture.',
        'She is also the recipient of Rotary the World Peace Fellow award (2010) and represented Rotary LA5 at Chulalongkorn University in Thailand Education, she believes should be the one that helps in all round development of body, mind and soul. True education aims at not only intellectual, moral and spiritual development but also makes our life in harmony with all existence. This can happen in an environment where the student and teacher are co-learners. Learning should be meaningful and related to real life situations, which impacts the learner and its surroundings.',
        'Her lifelong passion is to teach students’ from a diverse cultural background and incorporate the essence of different cultures into her classes. Her main research interests are to integrate technology in designing and developing humanitarian interventions around the world. She has developed several where the students participate in solving real world problems and designing technology based interventions. Some of the interventions that students have developed are: HIV/AIDS training manuals for the teenagers in Mozambique, Micro-financing and business plans for the women caregivers in Africa, E-learning course modules for the University of Unilurio in Mozambique, Solar cooking and training manuals and videos for the women in Mozambique.'
      ],
      image:'/assets/teamImages/manisha_javeri.jpg'
    },
    {
      name:'Abdul Sindi',
      content:['Abdul Sindi is an Ed.D. candidate in Educational Leadership at California State University, Los Angeles (CSULA). Interest and practice in applying digital curriculum to English as a Second Language students inspired further inquiry into how technology can facilitate curriculum instruction. Currently, Abdul is a research assistant in the Charter College of Education at CSULA, working with a team on creating a phone application for linked learning pathways development. Abdul\'s dissertation research is focused on the adoption factors in implementing a Blockchain self-sovereign digital identity management system in higher education.'],
      image:'/assets/teamImages/abdul_sindi.jpg'
    },
    {
      name:'Audra Whaley Ruben',
      content:['Audra Whaley Ruben has a BA in Visual Anthropology from USC and is a recent graduate from the Masters in Educational Technology Leadership program at California State University of Los Angeles. Before starting her career in education as an Instructional Designer, Audra worked at National Geographic Films, the Producers Guild of America and the American Film Market. Currently, she is the Community Representative for Carthay Center Environmental Studies elementary school in Los Angles.'],
      image:'/assets/teamImages/audra_wahley.jpg'
    },
    {
      name:'Rohan Goel',
      content:['Rohan Goel has a Bachelors in Technology from Abdul Kalam Technical University, India and is a recent master\'s graduate from California State University Los Angeles (CSULA) major in Computer Science. Before moving to U.S.A. in 2016, Rohan used to work as Software Engineer for Accenture. Currently, Rohan is a developer in University Auxiliary Services at CSULA working closely with the research team to develop a phone application. Rohan specializes in Web and Mobile Applications Development.'],
      image:'/assets/teamImages/rohan_goel.jpg'
    }
  ]
}
