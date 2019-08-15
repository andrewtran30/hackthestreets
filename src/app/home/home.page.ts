import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor() {}

  showDescription(name: String) {
    document.getElementById('descriptionCard').style.animation = "fadeIn 2s"
    document.getElementById('descriptionCard').style.backgroundColor = 'gray'
    document.getElementById('description').style.color = 'white'
    if(name == 'Rayan Yu') {
      document.getElementById('image').setAttribute('src', '/assets/team/RayanPicture.jpg')
      document.getElementById('descriptionCard').style.display = 'block'
      document.getElementById('description').innerHTML = "Rayan is one of the two founders and executive directors of HackTheStreets. He is currently a junior at James Madison High School. Since his childhood, Rayan has been interested in computer science, specifically, the field of AI and its application throughout the world. He pursues his passion with efforts like founding his school’s machine learning club (madAI), publishing research in the field of deep learning, and participating in the USA Computing Olympiad. In his free time, besides computer science, Rayan loves playing basketball, public speaking, watching stocks, and reading about philosophy. With HackTheStreets, he looks towards spreading out the light of computer science and AI to all students; to find the hidden talents and interests of those that could be just around the corner."
    } else if(name == 'Andrew Tran') {
      document.getElementById('image').setAttribute('src', '/assets/team/andrew-tran.png')
      document.getElementById('descriptionCard').style.display = 'block'
      document.getElementById('description').innerHTML = "Andrew is one of the two founders and the executive directors of HackTheStreets. He is a junior at Justice High School and has had a passion in computer science since fourth grade. Andrew started coding not because he wanted to learn all of java or python, but because he wanted to make cool games and websites for his friends his family. His interest in coding later developed into a passion that carried throughout middle and high school. Andrew is now the creator of three iOS & Android apps, the founder of his school’s App Development Club, and a participant in VEX Robotics. He hopes to impact others through HackTheStreets and show others how coding can be an enjoyable, fulfilling, and enriching experience"
    } else if(name == 'Divjot Bedi') {
      document.getElementById('image').setAttribute('src', '/assets/team/Divjot-Bedi.jpg')
      document.getElementById('descriptionCard').style.display = 'block'
      document.getElementById('description').innerHTML = "Currently as a rising senior at Thomas Jefferson High School for Science & Technology,Divjot explores the intersection of machine learning and biomedical science. To quench his zealous interest, Divjot has completed award-winning personal research projects, presented at scientific conferences, and is actively involved in STEM-related community outreach. As a 2nd place Grand Prize winner at the International Science and Engineering Fair, his competency to practically apply computer science and deep learning comes to shine. Currently, Divjot is finding ways to exploit computer vision techniques to decipher biomarkers of disease onset and progression. Through HackTheStreets Divjot hopes to foster the same love for research and ingenuity that he has experienced."
    } else if(name == 'Justin Hu') {
      document.getElementById('image').setAttribute('src', '/assets/team/Justin-Hu.JPG')
      document.getElementById('descriptionCard').style.display = 'block'
      document.getElementById('description').innerHTML = "Justin Hu is a senior at James Madison High School in Vienna, Virginia. A dedicated STEM student and researcher at Georgetown University as well as a nationally ranked policy debater, Justin is also a Kung Fu Master. A three-time Kung Fu National Championship title winner, representing the USA in international competitions, Justin was also a featured Kung Fu performer at the United Nations General Assembly along with Hollywood Kung Fu Master and celebrity, Jet Li. Together, they performed to promote health and peace. Justin has also performed Kung Fu demonstrations in the Eisenhower Theatre at The John F. Kennedy Center for Performing Arts, Washington DC, to promote US-China cultural exchange. An invited Kung Fu master instructor at the DC Special Olympics, Justin has also created the international non-profit, ABLE Kung Fu, which runs confidence-building Kung Fu workshops for 6,000+ underserved and physically challenged children. In his pursuit to empower children to be champions in their own lives, Justin has raised $45,000 to pay for clean water wells and life-changing surgical procedures for children in Senegal, Taiwan, and China"
    } else if(name == 'Shea Irvin') {
      document.getElementById('image').setAttribute('src', '/assets/team/shea-irvin.jpeg')
      document.getElementById('descriptionCard').style.display = 'block'
      document.getElementById('description').innerHTML = "Shea is the Director of Coordinations and a senior at Edison High school. Shea enjoys learning and has always had a knack for science. He has more recently become interested in computer science after playing video games for many years. Shea is an officer of his school's Technological Student Association and graduate of the Edison High school Global Stem Challenges program. Shea also participated in his schools lacrosse and track teams. With HackTheStreets Shea hopes to have fun and spread coding through the community."
    }
  }
  
}
