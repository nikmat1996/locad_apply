import React from 'react';
import '../styles/mainSection.css'
import video from "../assets/HOME-PAGE.mp4"


const MainSection = () => {
  return (
    <section className='mainSection'>
      <div className="mainSection-container">
        <article>
          <div>
            <div className="mainSection-iconWrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="60" viewBox="0 0 49 60" fill="none"><g clipPath="url(#clip0_508_10669)"><path d="M31.8906 41.1485L32.4605 40.5818L34.573 38.4693L28.3289 32.2252L27.5239 31.4201L26.7188 30.6151L23.9719 27.8682L21.4343 30.4057L20.6293 31.2108L19.8242 32.0159L13.374 38.4693L15.5123 40.6075L16.0823 41.1743L16.649 41.7443L23.9719 49.0672L31.3206 41.7185L31.8906 41.1485Z" fill="#CFDCDC"></path><path d="M33.0267 42.2886L32.4599 42.8585L24.7764 50.5389V60L34.9041 49.8723V45.3059V44.166V43.026V40.4111L33.5967 41.7186L33.0267 42.2886Z" fill="#CFDCDC"></path><path d="M14.9422 42.3143L14.3723 41.7443L13.0391 40.4111V43.0775V44.2175V45.3542V49.8723L23.1668 60V50.5389L15.5122 42.8843L14.9422 42.3143Z" fill="#CFDCDC"></path><path d="M31.2692 7.53546V3.99316H16.749V7.53546H31.2692Z" fill="#CFDCDC"></path><path d="M31.2692 2.19944V0H16.749V2.19944V2.383H31.2692V2.19944Z" fill="#CFDCDC"></path><path d="M35.4133 14.4042H31.2495V9.58029V9.14233H16.7068V9.57385V14.4042H12.543L23.9749 25.3016L35.4133 14.4042Z" fill="#CFDCDC"></path><path d="M19.8241 32.4797L21.4342 30.8695V26.7154C21.4374 26.6671 21.4374 26.6187 21.4342 26.5705V26.5318C21.4254 26.498 21.4147 26.4646 21.402 26.432V26.3934C21.3833 26.3495 21.3607 26.3075 21.3344 26.2678C21.3001 26.2319 21.2624 26.1995 21.2217 26.1712V26.1712L11.3097 16.2592C11.1559 16.1131 10.9518 16.0316 10.7397 16.0316C10.5276 16.0316 10.3235 16.1131 10.1697 16.2592L0.257739 26.1712C0.224219 26.2058 0.194021 26.2436 0.167563 26.2839V26.2839C0.145745 26.319 0.12638 26.3556 0.1096 26.3934V26.4384C0.0970043 26.4697 0.0872942 26.502 0.0806091 26.5351V26.5769C0.077297 26.623 0.077297 26.6693 0.0806091 26.7154V36.6274C0.0805803 36.8409 0.165109 37.0459 0.315702 37.1973L10.1472 47.1029H10.1665C10.1925 47.1299 10.2217 47.1537 10.2534 47.1737L10.2856 47.1963C10.3246 47.2219 10.3655 47.2445 10.408 47.2639C10.4468 47.2787 10.4866 47.2905 10.5272 47.2993C10.5881 47.3158 10.6508 47.3244 10.7139 47.3251V47.3251C10.777 47.3244 10.8398 47.3158 10.9007 47.2993C10.9413 47.2905 10.9811 47.2787 11.0199 47.2639V47.2639C11.0623 47.2445 11.1032 47.2219 11.1422 47.1963L11.1744 47.1737C11.2062 47.1537 11.2354 47.1299 11.2614 47.1029C11.2811 47.0839 11.2994 47.0634 11.3161 47.0417C11.4426 46.8971 11.5133 46.7121 11.5158 46.52V45.715V36.9591L19.8176 28.6572L19.8241 32.4797ZM9.91209 44.5943L1.61024 36.2925V28.6572L9.91209 36.9591V44.5943ZM10.7172 35.4874L1.94193 26.7154L10.7172 17.9402L19.4892 26.7154L10.7172 35.4874Z" fill="#CFDCDC"></path><path d="M48.1394 26.5769V26.5351C48.1328 26.502 48.123 26.4697 48.1105 26.4384C48.1065 26.4229 48.1011 26.4078 48.0944 26.3934C48.0776 26.3556 48.0582 26.319 48.0364 26.2839V26.2839C48.011 26.2428 47.9807 26.205 47.9462 26.1712L38.0342 16.2592C37.8804 16.1131 37.6764 16.0316 37.4643 16.0316C37.2521 16.0316 37.0481 16.1131 36.8943 16.2592L26.9533 26.1454C26.9198 26.1789 26.8896 26.2156 26.8631 26.2549V26.2549C26.8368 26.2946 26.8142 26.3366 26.7955 26.3805V26.4191C26.7829 26.4517 26.7721 26.4851 26.7633 26.5189C26.7618 26.5318 26.7618 26.5448 26.7633 26.5576C26.7586 26.6058 26.7586 26.6543 26.7633 26.7025V30.8566L28.3735 32.4668V28.6572L36.6753 36.9591V45.7343V46.5393C36.6777 46.7314 36.7485 46.9164 36.8749 47.061C36.8917 47.0827 36.91 47.1032 36.9297 47.1222C36.9571 47.1477 36.9861 47.1714 37.0166 47.1931L37.0488 47.2156C37.0886 47.2419 37.1306 47.2646 37.1744 47.2832V47.2832C37.2132 47.298 37.253 47.3098 37.2936 47.3186C37.3545 47.3349 37.4173 47.3435 37.4804 47.3444V47.3444C37.5848 47.3397 37.688 47.319 37.7863 47.2832V47.2832C37.8291 47.2646 37.8701 47.2419 37.9087 47.2156L37.9408 47.1931C37.9726 47.1731 38.0018 47.1493 38.0278 47.1222H38.0471L47.9591 37.2102C48.1097 37.0588 48.1942 36.8538 48.1942 36.6402V26.7154C48.1813 26.6673 48.163 26.6208 48.1394 26.5769V26.5769ZM37.4353 35.4874L28.6633 26.7154L37.4353 17.9402L46.2105 26.7154L37.4353 35.4874ZM46.5422 36.2925L38.2403 44.5943V36.9591L46.5422 28.6572V36.2925Z" fill="#CFDCDC"></path></g><defs><clipPath id="clip0_508_10669"><rect width="48.1526" height="60" fill="white"></rect></clipPath></defs></svg> 
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="60" viewBox="0 0 55 60" fill="none"><g clipPath="url(#clip0_508_10672)"><path d="M40.2795 43.0562L39.264 42.0407L36.0733 45.2278L35.9185 38.0145L31.6582 42.2712V60L43.9492 47.709C43.3507 46.4699 42.5498 45.3393 41.5796 44.3635L40.2795 43.0562Z" fill="#CFDCDC"></path><path d="M50.3743 27.7223V23.5557L46.2041 27.7223H50.3743Z" fill="#CFDCDC"></path><path d="M20.0088 32.1805L11.1426 23.3143V41.2844L29.8689 60.0108V42.1559L20.2285 32.5118C20.1308 32.4197 20.0556 32.3064 20.0088 32.1805Z" fill="#CFDCDC"></path><path d="M12.291 21.7766L20.9844 30.47L39.6711 11.7832L30.9778 3.08984L27.4342 6.63345V19.2161L15.1216 18.946L12.291 21.7766Z" fill="#CFDCDC"></path><path d="M35.861 35.4829L35.8574 35.2848L35.6918 27.7222H43.42H43.6217H43.6577L49.4989 21.881L49.4809 21.863L49.38 21.7622L40.8091 13.1913L22.2556 31.7448L22.1872 31.8132L22.126 31.878L30.6933 40.449L30.8157 40.5678L30.877 40.503L35.861 35.5189V35.4829Z" fill="#CFDCDC"></path><path d="M12.0672 12.0569L13.3673 13.3569L14.3828 14.3725L15.6577 15.6437L14.3828 16.9185L14.192 17.1274H14.4044L15.6505 17.1526L16.8965 17.1814L25.6475 17.3723V5.66831L25.5322 5.78355L24.2466 7.04398L22.9717 5.76914L21.5781 4.37547C20.5365 3.33644 19.3353 2.47081 18.0201 1.8114L9.69043 10.1518C10.5482 10.6991 11.345 11.3365 12.0672 12.0533V12.0569Z" fill="#CFDCDC"></path><path d="M4.75002 2.94943C3.07905 4.58079 1.71057 5.98166 0.126034 7.60221L0 7.72826C0.297701 7.71385 0.596599 7.70665 0.896701 7.70665C1.14879 7.70665 1.39726 7.70666 1.64934 7.72466L8.55291 0.817505C7.12976 1.20586 5.82384 1.93797 4.75002 2.94943Z" fill="#CFDCDC"></path><path d="M11.9197 0.34938V-0.0107422V0.34938H11.5596L3.9502 7.95877C5.36797 8.20062 6.74652 8.63308 8.04839 9.2444L16.2268 1.06602C14.84 0.592955 13.3849 0.350856 11.9197 0.34938Z" fill="#CFDCDC"></path><path d="M54.4798 42.7178C54.4507 41.9428 54.3555 41.1717 54.1953 40.413L46.1934 48.4185C46.4964 49.2513 46.7301 50.1077 46.892 50.979L54.487 43.3876C54.4906 43.1535 54.487 42.9374 54.4798 42.7178Z" fill="#CFDCDC"></path><path d="M47.1762 55.1996L47.5363 54.8395C49.0164 53.399 50.2948 52.189 51.8253 50.6224C52.9583 49.4085 53.7498 47.9163 54.1193 46.2974L47.1689 53.2513C47.205 53.9002 47.2075 54.5505 47.1762 55.1996V55.1996Z" fill="#CFDCDC"></path><path d="M52.1748 39.8908L53.6153 38.4503C53.2476 37.4491 52.7642 36.4942 52.1748 35.6053C51.8992 35.1928 51.6023 34.7949 51.2853 34.4133C51.044 34.1324 50.7955 33.8551 50.5291 33.5886L50.385 33.4446L49.1246 32.1841L47.8497 30.9093L49.1246 29.6381L49.2362 29.5228H37.5322L37.6187 33.5238V33.7183V33.7579L37.6403 34.7698V35.0039L37.6655 36.0158V36.2499L37.7699 40.9783L37.9752 40.773L39.25 39.4982L40.5212 40.773L41.5368 41.7886L42.0914 42.3432L42.8368 43.0887C43.8037 44.0597 44.6227 45.1675 45.2676 46.3766L45.4081 46.6431L51.2853 40.7911L52.1748 39.8908Z" fill="#CFDCDC"></path></g><defs><clipPath id="clip0_508_10672"><rect width="54.4865" height="60" fill="white"></rect></clipPath></defs></svg> 
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="60" viewBox="0 0 56 60" fill="none"><g clipPath="url(#clip0_508_10675)"><path d="M55.2271 4.64563H36.6162L40.0358 8.06874L38.0727 10.0319L39.3625 11.3182L45.7941 17.7498C45.8321 17.7879 45.8665 17.8294 45.8969 17.8738V17.8738C45.9216 17.9133 45.943 17.9548 45.9607 17.9979C45.9681 18.0126 45.974 18.028 45.9784 18.0439C45.9922 18.0783 46.0029 18.1139 46.0103 18.1502C46.0123 18.1655 46.0123 18.181 46.0103 18.1963C46.0157 18.247 46.0157 18.298 46.0103 18.3487V25.9213L51.9422 19.9894L55.3653 23.4089L55.2271 4.64563Z" fill="#CFDCDC"></path><path d="M4.38672 43.6853L16.3144 55.6131L19.2875 52.6364L7.36333 40.7123L4.38672 43.6853Z" fill="#CFDCDC"></path><path d="M2.74628 45.3295L0 48.0758L11.9277 59.9999L14.674 57.2537L15.0638 56.8639L3.13607 44.9397L2.74628 45.3295Z" fill="#CFDCDC"></path><path d="M25.5379 0.00153252L7.16113 18.3783L13.9791 25.1963L32.3559 6.81952L25.5379 0.00153252Z" fill="#CFDCDC"></path><path d="M30.6948 31.5982L31.563 30.73L35.8153 26.4777L36.4425 25.8505L37.0697 25.2233L43.9124 18.3806L37.1017 11.5698L30.2554 18.4125L29.6318 19.0397L29.0045 19.6669L20.3901 28.2814L19.5219 29.146L18.7246 29.9469L18.7955 30.0142L25.5283 36.747L29.816 32.4628L30.6948 31.5982ZM37.1052 13.6216L41.8642 18.3771L37.1052 23.1432L32.3462 18.3841L37.1052 13.6216Z" fill="#CFDCDC"></path><path d="M37.697 27.0978L37.0697 27.725L31.6197 33.1786L30.7551 34.0432L29.8869 34.9078L26.4248 38.3735V45.5776V46.8285V48.0829V55.4961L44.2809 37.6399V30.2268V28.9723V27.7179V20.5138L38.3242 26.4741L37.697 27.0978Z" fill="#CFDCDC"></path><path d="M18.3592 38.6853L14.0148 34.0857L13.4088 33.4408L13.0935 33.1077V32.7498V31.4954V29.8724V28.9865V28.1006V26.8143L6.79297 20.5138V37.6399L7.36349 38.2069L7.98716 38.8341L8.61437 39.4578L20.5421 51.3855L21.1693 52.0127L21.793 52.6399L24.6526 55.4961V49.8547V48.6003V47.3494V38.3735L18.3592 32.0801V38.6853Z" fill="#CFDCDC"></path><path d="M15.2305 26.4458L16.981 28.1928L17.4736 28.6889L17.9449 28.2176L28.2213 17.9376L35.8506 10.3118L35.5671 10.0283L33.6075 8.06873L15.2305 26.4458Z" fill="#CFDCDC"></path><path d="M14.8652 28.5861V29.029V29.9149V32.4025L16.5874 34.2274V30.3082L16.2295 29.9503L15.3188 29.0396L14.8652 28.5861Z" fill="#CFDCDC"></path></g><defs><clipPath id="clip0_508_10675"><rect width="55.404" height="60" fill="white"></rect></clipPath></defs></svg> 
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="60" viewBox="0 0 62 60" fill="none"><g clipPath="url(#clip0_508_10678)"><path d="M43.0612 10.7792V12.7789C52.581 16.666 59.133 24.829 59.133 34.244C59.133 47.4154 46.2831 58.1312 30.4916 58.1312C14.7002 58.1312 1.85025 47.4154 1.85025 34.244C1.85025 24.7766 8.49199 16.5763 18.0977 12.7153L18.1537 12.6929V10.697C7.46042 14.7075 -0.0185547 23.7488 -0.0185547 34.244C-0.0185547 48.447 13.6686 60 30.4916 60C47.3147 60 61.0018 48.447 61.0018 34.244C61.0205 23.8198 53.6387 14.8271 43.0612 10.7792ZM0.956958 33.3133C0.942008 33.6248 0.934511 33.9351 0.934511 34.244C0.934511 33.9351 0.942008 33.6248 0.956958 33.3133V33.3133Z" fill="#CFDCDC"></path><path d="M15.3837 23.7675L14.7297 23.1134C11.762 26.1297 9.97168 30.0056 9.97168 34.2291C9.97168 43.8235 19.1924 51.624 30.5286 51.624C41.8648 51.624 51.0855 43.8235 51.0855 34.2291C51.0855 30.0429 49.3251 26.1969 46.4022 23.1882L45.7332 23.8273L45.053 24.4776C47.6693 27.1463 49.2167 30.54 49.2167 34.2291C49.2167 42.792 40.8369 49.7552 30.5286 49.7552C20.2202 49.7552 11.8405 42.792 11.8405 34.2291C11.8405 30.4915 13.4327 27.079 16.0752 24.3991L15.3837 23.7675Z" fill="#CFDCDC"></path><path d="M22.9041 30.9624L22.2201 30.3083C21.4405 31.4789 21.022 32.8526 21.0166 34.259C21.0166 38.7442 25.2738 42.3809 30.5102 42.3809C35.7466 42.3809 40.0037 38.7367 40.0037 34.259C39.999 32.8892 39.6021 31.5494 38.86 30.398L38.1723 31.0559L37.4733 31.7212C37.9036 32.4981 38.1311 33.3709 38.1349 34.259C38.1349 37.7051 34.715 40.512 30.5102 40.512C26.3053 40.512 22.8854 37.7051 22.8854 34.259C22.8927 33.3393 23.1401 32.4374 23.6031 31.6427L22.9041 30.9624Z" fill="#CFDCDC"></path><path d="M37.9445 10.2186H41.1925V10.1252V4.51501H20.0488V10.0542V10.2186H23.0763H37.9445Z" fill="#CFDCDC"></path><path d="M41.1925 2.42198V0.347599H41.215V0H20.0488V2.42198V2.64623H41.1925V2.42198Z" fill="#CFDCDC"></path><path d="M16.0976 21.865L16.7704 22.5041L17.4544 23.1582L23.4196 28.8581L24.0887 29.4972L24.7689 30.1476L30.5847 35.7017L36.3294 30.2149L37.0059 29.572L37.6749 28.9291L43.6514 23.2255L44.3354 22.5714L45.0044 21.9323L47.2619 19.7757H41.8947H41.192V19.3944V12.2369V12.0911V12.0874H41.1808H20.0408V12.2369V19.2861V19.7757H19.9848H19.1251H13.9111L16.0976 21.865Z" fill="#CFDCDC"></path></g><defs><clipPath id="clip0_508_10678"><rect width="61.0204" height="60" fill="white"></rect></clipPath></defs></svg> 
            </div>
            <h1 className='mainSection-h1'>STORE LOCAL, DELIVER GLOBAL.</h1>
            <p className='mainSection-p'>Let Locad be your logistics engine. We run the storage, packing, shipping, and tracking of your products through our international network of warehouses and local carriers. Increasing delivery speed, decreasing inventory errors and propelling your business forward.</p>
            <button>Speak with us</button>
          </div>
        </article>
        <div>
          <video src={video} loop autoPlay />
        </div>
      </div>
    </section>
  )
}

export default MainSection