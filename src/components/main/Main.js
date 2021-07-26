import "./Main.css";
import videoIcon from "../../assets/svg/logo.svg"
import Video from "../video/Video";

const Main = () => {
    return (
      <main>
        <div className="main__container">
          <div className="main__title">
            <img src={videoIcon} alt="vid"/>
            <div className="main__greeting">
              <h1>Hello Kevin</h1>
              <p>Welcome to your dashboard</p>
            </div>
          </div>

          <div className="live">
            <div className="video">
              <div className="video__title">
                <div>
                  <h1>Video</h1>
                  <Video />
                </div>
              </div>
            </div>

          <div className="chat">
            <div className="chat__title">
              <div>
                <h1>Integrated Chat</h1>
              </div>
            </div>
          </div>
        </div>


        <div className="main__cards">

          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Live Viewers</p>
              <span className="font-bold text-tittle">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-calendar fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title"> 2467</span>
            </div>
          </div>


          </div>

        </div>
      </main>
    )
}

export default Main
