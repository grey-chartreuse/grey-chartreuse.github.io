import * as React from "react"
import Layout from "../components/layout"
import Miyu from "../images/miyu.jpg"

const Home  = () => {
  return (
    <Layout>
      <div class="container">
        <div class="header">
          <div class="intro">
            <img class="profile-picture" src={Miyu} alt="A picture of my cat, Miyu."/>
              <div class="intro-info">
                <div class="profile">
                  <span class="korean-name">한지우 </span>
                  <span class="english-name">Jenna Han</span>
                </div>
                <div class="contact-info">
                  <span class="status">Sogang Univ. </span>
                  <span class="status-quo">Economics/Computer Science</span>
                </div>
                <div class="contacts">
                  <ul>
                    <li><a href=""><i class="fa-regular fa-envelope"></i></a></li>
						        <li><a href=""><i class="fa-brands fa-github"></i></a></li>
						        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
						        <li><a href=""><i class="fa-brands fa-tumblr"></i></a></li>
					        </ul>
                </div>
              </div>
            </div>
          <div class="about">
            <span class="position">Rookie Developer </span>
            <span class="desc">
              현재 서강대학교에 재학중이며 컴퓨터공학을 복수전공 했습니다. 아직 배울 점이 많아 세부적인 진로는 정하지 못했지만, 프론트엔드 분야에 관심을 가지고 있습니다.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home