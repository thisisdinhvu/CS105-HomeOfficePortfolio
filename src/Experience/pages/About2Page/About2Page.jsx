import React from 'react'
import Page from '../Page'
import './About2Page.scss'
const About2Page = () => {
  return (
      <>
      <Page requireHomeOffice2={false} panelContent={{
        title: "About Us 2",
          quote: "Revolutionizing architecture for the AI future.",
          content: [
            "At Daniels Design & Dev, we believe architecture is more than just form—it’s an experience. Our studio exists to bridge the gap between design and technology, helping architects bring their visions to life through stunning visuals and interactive digital experiences. Whether it’s minimalist conceptual renderings, immersive real-time environments, or parametric design solutions, we craft every project with precision, emotion, and a deep respect for spatial storytelling.",
          ],
      }}
        imageSrc={"images/uia.webp"}
      /> 
    </>
  )
}

export default About2Page
