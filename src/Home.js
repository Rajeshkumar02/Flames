import React, { useState } from 'react';
import "./Home.css";
import { useHistory } from 'react-router';
import {db} from "./Config";

function Home() {

    var history = useHistory();

    const [you, setYou] = useState("");
    const [another, setAnother] = useState("");

    const handler = async (event) => {
        event.preventDefault();
        var name1 = you;
        var name = another;
        var flamess = "";
        var images = "";
        const youlow = you.toLowerCase();
        const youlow1 = youlow.replace(/\s+/g, '');
        const anylow = another.toLowerCase();
        const anylow1 = anylow.replace(/\s+/g, '');
        var anylow2 = anylow1;
        const image1 = ["https://w7.pngwing.com/pngs/528/188/png-transparent-man-and-woman-taking-pose-art-drawing-chibi-cartoon-animation-best-friend-purple-child-cartoon.png",
            "https://wallpapercave.com/wp/wp2587902.jpg",
            "https://png.pngtree.com/png-clipart/20210826/ourlarge/pngtree-520-valentines-day-hand-drawn-cartoon-elements-png-image_3527438.jpg",
            "https://e7.pngegg.com/pngimages/41/459/png-clipart-couple-wedding-marriage-cartoon-couple-love-cartoon-character.png",
            "https://banner2.cleanpng.com/20190616/ugo/kisspng-devil-friendship-enemy-good-5d0665a0666704.9050034815607003204194.jpg",
            "https://www.kindpng.com/picc/m/16-164838_brother-sibling-sister-clip-art-brother-and-sister.png"]
        const flames = ['Friend', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'];
        const youlen = youlow1.length;
        const anylen = anylow1.length;
        var count = 0;

        for (let i = 0; i < youlow1.length; i++) {
            for (let j = 0; j < anylow2.length; j++) {
                if (youlow1[i] === anylow2[j]) {
                    count++;
                    anylow2 = anylow2.replace(anylow2[j], "");
                    break;
                }
            }
        }
        
        const total = (youlen - count) + (anylen - count);
        if (total === 0) {
            flamess = "Friends";
            images = image1[0];
        }
        else if (total % 6 === 0) {
            flamess = "Sibling";
            images = image1[5];
        }
        else {
            var y = 0;
            y = total % 6;
            y--;
            flamess = flames[y];
            images = image1[y];
        }
        const locate = {
            pathname: "/next",
            state: [{ name: name, flame: flamess, image: images }]
        }
        db.collection("FLAMES-2022").doc(you+" , "+another).set(
            {
                Name: name1,
                Name2: name,
                Relation: flamess,
            }
        )
        history.push(locate);
        history.replace(locate);

    }

    return (
        <div>
            <center>
                <div className="container">
                    <div className="card">
                        <img src="https://raw.githubusercontent.com/Rajeshkumar02/Flames/a09bf6045f8991299d1235d89675b317f6a93ea9/src/hello.png" alt="Img" />
                        <div className="card-body">

                            <center>
                                <h5 className="card-title">FLAMES</h5>
                            </center>

                            <p className="card-text">FLAMES stance for:<br />
                                F - Friendship<br />
                                L - Love<br />
                                A - Affection<br />
                                M - Marriage<br />
                                E - Enemy<br />
                                S - Sibling</p>
                            <form onSubmit={handler}>
                                <label>
                                    Enter your Name :<br></br>
                                    <input type="text" name="name" onChange={(e) => setYou(e.target.value)} required/>
                                </label><br />
                                <label>
                                    Enter his/her Name :<br></br>
                                    <input type="text" name="name" onChange={(e) => setAnother(e.target.value)} required/>
                                </label><br />
                                <center><input className="btn button" type="submit" value="Submit" /></center>
                            </form>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Home;
