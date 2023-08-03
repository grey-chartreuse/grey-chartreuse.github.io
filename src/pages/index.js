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
                    <li><a href="mailto:grey.chartreuse@gmail.com"><i class="fa-regular fa-envelope"></i></a></li>
						        <li><a href="https://github.com/grey-chartreuse"><i class="fa-brands fa-github"></i></a></li>
						        <li><a href="https://www.instagram.com/grey.chartreuse/"><i class="fa-brands fa-instagram"></i></a></li>
						        <li><a href="https://greyandginger.tumblr.com"><i class="fa-brands fa-tumblr"></i></a></li>
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
      <div id="skills"></div>
      <div class="container">
        <div class="contents-container">
          <span class="head">SKILLS</span>
          <div class="content-details">
            <div class="name-section">
              <span class="content-name">Python</span>
            </div>
            <div class="detail-section">
              <span class="details">서강대학교 중앙 컴퓨터 동아리 SGCC에서 1년 동안 Python 스터디 멘토로 활동했습니다.</span><br></br>
              <span class="details">Tensorflow를 활용해 시계열 데이터를 분석한 경험이 있습니다.</span>
            </div>
          </div>
          <div class="content-details">
            <div class="name-section">
              <span class="content-name">C/C++</span>
            </div>
            <div class="detail-section">
              <span class="details">컴퓨터공학과 재학 중 대부분의 과제를 해당 언어로 수행했습니다.</span><br></br>
              <span class="details">Linux 환경에서 C++를 이용해 PintOS 프로젝트를 수행한 경험이 있습니다.</span>
            </div>
          </div>
          <div class="content-details">
            <div class="name-section">
              <span class="content-name">JavaScript</span>
            </div>
            <div class="detail-section">
              <span class="details">현재 꾸준히 공부하고 있습니다.</span><br></br>
              <span class="details">p5.js를 활용해 간단한 벽돌 깨기 게임을 만든 경험이 있습니다.</span>
            </div>
          </div>
          <div class="content-details">
            <div class="name-section">
              <span class="content-name">Flutter</span>
            </div>
            <div class="detail-section">
              <span class="details">현재 해당 프레임워크를 사용한 프로젝트를 진행중입니다.</span><br></br>
              <span class="details">Flutter를 활용하여 앱 UI/UX를 구현한 경험이 있습니다.</span>
            </div>
          </div>
        </div>
      </div>
      <div id="projects"></div>
      <div class="container">
        <div class="contents-container">
          <span class="head">PROJECTS</span>
          <div class="content-details">
            <div class="name-section">
              <span class="content-name">Autoencoder를 활용한 예측 주가 이상치 탐지</span>
            </div>
            <div class="detail-section">
              <span class="details">
                프로젝트 진행 시점 당시 공매도가 일시 중단되었던 상황이라 <strong>거래량</strong>이 주가에 가장 큰 영향을 미친다고 가설을 세웠습니다.
                수집한 데이터 중 거래 중지 등의 결측치를 제거하는 전처리 과정을 거쳤고,
                이후 Autoencoder 모델에 적용한 결과 <strong>외국인 거래량 데이터</strong>가 개인/기관에 비해 <strong>오차값이 크다</strong>는 사실을 확인했습니다.
                또 <strong>LSTM</strong> 모델을 활용해 주가 예측 데이터를 획득, 이후 대조군으로 실제 주가 데이터를 각각 Autoencoder에 대입했습니다.
                그 결과 실제 미래 데이터에서는 오차값이 일정한 반면에 <strong>예측한 데이터에서는 어느 시점을 기점으로 오차값이 급격하게 상승</strong>하는 모습을 확인할 수 있었습니다.
              </span>
            </div>
          </div>
          <div class="content-details">
            <div class="name-section">
              <span class="content-name">계단형 CPMM을 활용한 탈중앙화 가격 결정 모델 애플리케이션</span>
            </div>
            <div class="detail-section">
              <span class="details">
                해커톤 출전 당시 거래 수수료를 받는 가상 화폐 거래소와 유통업의 <strong>유사성을 발견</strong>해 탈중앙화 <strong>거래소인 DEX의 BM을 유통업에 대입</strong>하는 아이디어를 제안했습니다.
                대부분의 소비재는 비탄력적이기 때문에 거래마다 가격이 변동하는 CPMM 함수를 그대로 적용할 수 없었습니다.
                따라서 저희는 <strong>그래프를 계단식으로 변환</strong>해 문제점을 해결했습니다.
                유동성 및 상품의 공급과 판매에 따른 가격 변화를 반영할 수 있는 앱을 C# 및 유니티 툴로 개발했고, <strong>예선을 통과</strong>하는 성과를 거두었습니다.
              </span>
            </div>
          </div>
          <div class="content-details">
            <div class="name-section">
              <span class="content-name">Flutter와 Firebase를 활용한 맛집 추천 애플리케이션</span>
            </div>
            <div class="detail-section">
              <span class="details">
                현재 개발 중인 프로젝트입니다. 서강대학교 주변의 맛집을 검색할 수 있는 애플리케이션으로,
                식사 메뉴 결정을 할 때 곤란을 겪는 사람들을 위한 <strong>랜덤 추천 기능</strong>을 지원하고 있습니다. 랜덤 추천의 경우 거리 및 음식 종류, 가격대 조건을 지정 가능합니다.
                검색의 경우 <strong>태그 기능을 지원</strong>해 검색이 보다 간편해졌습니다. 또한 <strong>즐겨찾기</strong>를 통해 본인의 맛집 모음을 저장할 수 있습니다.
                Back-end는 firebase를 통해 개발 중에 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="contact"></div>
      <div class="container">
        <div class="contents-container">
          <span class="head">CONTACTS</span>
          <div class="content-flex">
            <div class="name-section">
              <span class="flex-name">E-mail</span>
            </div>
            <div class="flex-detail">
              <span class="link-details"><a href="mailto:grey.chartreuse@gmail.com">grey.chartreuse@gmail.com</a></span>
            </div>
          </div>
          <div class="content-flex">
            <div class="name-section">
              <span class="flex-name">GitHub</span>
            </div>
            <div class="flex-detail">
              <span class="link-details"><a href="https://github.com/grey-chartreuse">grey-chartreuse</a></span>
            </div>
          </div>
          <div class="content-flex">
            <div class="name-section">
              <span class="flex-name">Instagram</span>
            </div>
            <div class="flex-detail">
              <span class="link-details"><a href="https://www.instagram.com/grey.chartreuse/">@grey.chartreuse</a></span>
            </div>
          </div>
          <div class="content-flex">
            <div class="name-section">
              <span class="flex-name">Tumblr</span>
            </div>
            <div class="flex-detail">
              <span class="link-details"><a href="https://greyandginger.tumblr.com">@greyandginger</a></span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home