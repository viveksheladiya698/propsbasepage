import Header from '../components/Header'
import Slider from '../components/Slider';
import Courses from '../components/Courses';
import Aboutus from '../components/Aboutus';
import Pannel from '../components/Pannel';
import Student from '../components/Student';
import Why from '../components/Why';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

let manu = ["HOME", "COURSES", "ACTIVITES", "BLOG", "KNOW US", "GET IN TOUCH", "STUDENT ZONE", ""];

let ur = [
    require('../images/2.jpeg'),
    require('../images/30.webp'),
    require('../images/31.webp'),
    require('../images/32.webp')
];

let cd = [
    { img: require(`../images/3.webp`), head: "Development Courses" },
    { img: require(`../images/4.webp`), head: "Design Courses" },
    { img: require(`../images/5.webp`), head: "Programming IT" },
    { img: require(`../images/6.webp`), head: "Trendy Courses" },
    { img: require(`../images/7.webp`), head: "Civil-Mech.Engineering" },
    { img: require(`../images/8.webp`), head: "Business Development" },
]

let st = [
    { img: require(`../images/bg1.png`), num: "18000+", title: "HAPPY STUDENTS" },
    { img: require(`../images/bg2.png`), num: "10+", title: "CERTIFICATION APPROVAL" },
    { img: require(`../images/bg3.png`), num: "100+", title: "CERTIFIED TEACHERS" },
    { img: require(`../images/bg4.png`), num: "12000+", title: "STUDENTS PLACED" }
]

let cre = [
    { img: require(`../images/22.png`), clr: "#f6475f", title: "Industry experts as Trainers", info: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
    { img: require(`../images/23.png`), clr: "#ffbc06", title: "Latest Curriculum", info: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time." },
    { img: require(`../images/24.png`), clr: "#b3d369", title: "Latest technology", info: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },
    { img: require(`../images/27.png`), clr: "#554da7", title: "Interview Assistance", info: "At the end of each training,our training instructor will go through the possible technical questions you may be asked." },
    { img: require(`../images/25.png`), clr: "#4382ff", title: "Free Upgradation", info: "We will be provided free upgradation for any newer version of the course you have." },
    { img: require(`../images/26.png`), clr: "#f94fa4", title: "Free Upgradation", info: "We will be provided free upgradation for any newer version of the course you have." }
]

let part = [
    require(`../images/15.png`),
    require(`../images/16.png`),
    require(`../images/17.png`),
    require(`../images/18.png`),
    require(`../images/19.png`),
    require(`../images/20.png`),
    require(`../images/33.png`),
    require(`../images/34.png`),
    require(`../images/35.png`),
]
let key = ["Php institute in Katargam", "Wordpress training course", "Blender 3D Design Course", "Laravel Training institute In Katargam", "solidworks Training In mota varachha", "Best Wordpress Training Institute", "Andriod Training In surat", "Laravel Training institute in Mota Varachha", "Google Sketchup Civil Training Course", "Maya Animation Courser", "Ios App Training Institute In surat", "Wordpress Training Institute in Mota Varachha", "Advance Wordpress Training Institute In Surat", "Web Development Training In varachha", "Codeigniter Training Course"];


function Home() 
{
    return (
        <>
            <Header man={manu}></Header>
            <Slider url={ur}></Slider>
            <Courses cad={cd}></Courses>
            <Aboutus></Aboutus>
            <Pannel inf={st}></Pannel>
            <Student></Student>
            <Why wh={cre}></Why>
            <Partners img={part} dm={key}></Partners>
            <Footer></Footer>
        </>
    )
};
export default Home;