import './About.css';
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
	<div className='about'>
		  <div className="about-left">
			  <img src={about_img} alt="" className='about-img'/>
			  <img src={play_icon} alt="" className='play-icon'/>
		  </div>
		  <div className="about-right">
			  <h3>ABOUT UNIVERSITY</h3>
			  <h2>Nurturing Tomorrow's Leaders Today</h2>
			  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odit temporibus dicta reprehenderit possimus ea, quibusdam libero aliquam modi recusandae asperiores? Voluptate sequi alias a reprehenderit! Quibusdam exercitationem aut sapiente!</p>
			  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, explicabo, eum dicta, laboriosam adipisci voluptates reprehenderit impedit ut magnam recusandae assumenda beatae. Totam, libero aperiam consequuntur tempora accusantium ea veniam.</p>
			  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ad culpa suscipit neque ea ut, numquam amet blanditiis corrupti voluptas inventore! Dolores doloribus cumque dolorem neque repudiandae officiis eligendi? Voluptate.</p>
		  </div>
	</div>
  )
}

export default About
