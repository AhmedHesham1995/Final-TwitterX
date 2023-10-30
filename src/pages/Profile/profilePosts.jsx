import React from "react";
import { Post } from "../../components/small/Links";
import images from "../../assets/images.jpeg";
import quran from "../../assets/quran.jpg";
import {
    FaRegComment,
    FaRetweet,
    FaRegHeart,
    FaChartSimple,
    FaArrowUpFromBracket,
  } from "react-icons/fa6";
const ProfilePosts = () => {
  return (
    <div>
      <Post
        text="رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ
                    عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي "
      />
      <Post
        text="
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا
                    تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ
                    وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ
                    إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا
                    خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا
                    بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ
                    وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ"
      />

      <div className="posts">
        <div className="posts-top">
          <div className="pic">
            <img src={images} alt="" />
          </div>
          <div className="content">
            <div className="name">Boo</div>
            <div className="tweet">
              <img
                className="picquran"
                src={quran}
                style={{ width: "400px" }}
              />
            </div>
          </div>
        </div>
        <div className="posts-bottom">
          <span>
            <FaRegComment />
          </span>
          <span>
            <FaRetweet />
          </span>
          <span>
            <FaRegHeart />
          </span>
          <span>
            <FaChartSimple />
          </span>
          <span>
            <FaArrowUpFromBracket />
          </span>
        </div>
        <hr />
      </div>

      <Post text="وَأَن لَّيْسَ لِلْإِنسَـٰنِ إِلَّا مَا سَعَىٰ" />
      <Post
        text="
                    اللهم إني أتبرأ من حولي وقوتي، وألتجئ إلى حولك وقوّتك، اللهم
                    أعنِّي ولا تُعِن عليَّ، وانصرني ولا تنصر عليَّ، واهدني
                    ويسِّر الهُدى لي 🌿"
      />
      <Post
        text="اللهُم حقّق لي ما أُريد فأنت تعلم السِر وَ ما يخفي ، اللهُمَ
                    فوضتك أمري كُله فجمّله خيراً بما شِئت و إجعلني يارب ممن نظرت
                    إليه فرحمته و سمعت دُعائه فأجبته"
      />
    </div>
  );
};

export default ProfilePosts;
