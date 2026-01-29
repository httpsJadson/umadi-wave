import "./heroAnim.css";

export default function HeroAnim() {
    return (
        <div className="hero-anim-wrapper w-full">
            <div className="heroAnim heroAnim--wide">
                
                <svg className="lines" viewBox="0 0 900 420" preserveAspectRatio="none">
                    
                    <line x1="450" y1="210" x2="160" y2="110" />
                    <line x1="450" y1="210" x2="230" y2="260" />
                    <line x1="450" y1="210" x2="740" y2="110" />
                    <line x1="450" y1="210" x2="710" y2="260" />
                    <line x1="450" y1="210" x2="450" y2="360" />
                </svg>

                
                <img className="chip c1" src="/icons/html.svg.png" alt="" />
                <img className="chip c2" src="/icons/CSS.svg.png" alt="" />
                <img className="chip c3" src="/icons/JavaScript.svg.png" alt="" />
                <img className="chip c4" src="/icons/React-icon.svg" alt="" />
                <img className="chip c5" src="/icons/postgres.svg.png" alt="" />


                
                <div className="centerCard" >

                    <img className="centerIcon" src="/icons/GitHub.svg.png" alt="GitHub" />
                </div>

            </div>
        </div>
    );
}
