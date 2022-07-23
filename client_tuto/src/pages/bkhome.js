import React from "react";

export default class HomePage extends React.Component{
    render(){
        return(
            <div className="home-page-container">
                <div className="banner">
                    <div className="carousel">
                        <ul className="slides">
                            <input type="radio" name="image-buttons" id="img-1" checked />
                            <li className="slide-container">
                                <div className="slide-image">
                                    <img alt="img-1" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg" />
                                </div>
                                <div className="carousel-controls">
                                    <label htmlFor="img-3" className="prev-slide">
                                        <span>&lsaquo;</span>
                                    </label>
                                    <label htmlFor="img-2" className="next-slide">
                                        <span>&rsaquo;</span>
                                    </label>
                                </div>
                            </li>
                            <input type="radio" name="image-buttons" id="img-2" />
                            <li className="slide-container">
                                <div className="slide-image">
                                    <img alt="img-2" src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true" />
                                </div>
                                <div className="carousel-controls">
                                    <label htmlFor="img-1" className="prev-slide">
                                        <span>&lsaquo;</span>
                                    </label>
                                    <label htmlFor="img-3" className="next-slide">
                                        <span>&rsaquo;</span>
                                    </label>
                                </div>
                            </li>
                            <input type="radio" name="image-buttons" id="img-3" />
                            <li className="slide-container">
                                <div className="slide-image">
                                    <img alt="img-3" src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg" />
                                </div>
                                <div className="carousel-controls">
                                    <label htmlFor="img-2" className="prev-slide">
                                        <span>&lsaquo;</span>
                                    </label>
                                    <label htmlFor="img-1" className="next-slide">
                                        <span>&rsaquo;</span>
                                    </label>
                                </div>
                            </li>
                            <div className="carousel-dots">
                                <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
                                <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
                                <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="services">
                    <h2>services</h2>
                    မိတ်ဆွေတွင် ဖျားခြင်း, ချောင်းဆိုးခြင်း , နှာချေခြင်း , လည်ချောင်းနာခြင်း အရသာ ၊ အနံ့မရတော့ခြင်း ၊ ကိုက်ခဲခြင်း ၊ ဝမ်းလျောခြင်း ၊ အသက်ရှုရခက်ခြင်း ၊ ရင်ဘတ်အောင့်ခြင်း

                    စသည်ဖြင့် ခံစားနေရပြီဆိုလျှင် ယခုလက်ရှိဖြစ်ပွါးနေသော Covid 19 အပါအဝင် အသက်ရှုလမ်းကြောင်းဆိုင်ရာ ရောဂါတစ်ခုခုရှိနေနိုင်ပါတယ် . နီးစပ်ရာကျန်းမာရေးဌာနမှာစစ်ဆေးမှုခံယူသင့်ပါတယ်။

                    အချို့လူနာများမှာလက္ခဏာလုံးဝ လုံးဝမပြသမျိူးလည်းရှိပါတယ်။ မိမိကိုယ်ကို သာမက မိသားစုကိုပါ covid 19 မှကာကွယ်ပေးနိုင်ရန် မိမိကျန်းမာရေးအတွက် Mask ကို ဘယ်လိုလုံခြုံစွာ ဝတ်ဆင်ရမလည်းဆိုတာလေး အကြံပေးလိုပါတယ်။

                </div>
                <div className="contact">
                    <h2>Contact</h2>
                    မိမိ၏ Maskကိုအခြားသူများ ကိုပေးသုံးခြင်း မပြုသင့်ပါ။

                    အစာစားချိန်မှ လွဲ၍ maskကိုတပ်ဆင်ထားသင့်ပါသည်။

                    လတ်တလောသုတေသနတွေ့ရှိချက်များအရ ရောဂါပိုးပါနိုင်တဲ့ အစက်အမှုန်ကြီးတွေဟာ ချောင်းဆိုးတဲ့အခါ တစ်စက္ကန့်မှာ ၃၃ ပေနှုန်း အရှိန်နဲ့ ၆ပေခွဲကျော် , နှာချေတဲ့အခါတစ်စက္ကန့်ကို ၁၆၄ ပေ အရှိန်နှုန်းနဲ့ ၁၉ ပေခွဲကျော် ပုံမှန်အသက်ရှုထုတ်တဲ့အခါ ၅ပေ ခန့် အထိ ရောက်ရှိနိုင်ပြီး

                    ဒီလို အစက်အမှုန်ထဲမှာပါလာတဲ့ ရောဂါပိုးတွေဟာ အနီးအနားမှာရှိတဲ့ ပါးစပ်နဲ့နှာခေါင်းစည်း mask တပ်မထားတဲ့ သူတွေကို အလွယ်တကူရောဂါကူးစက်နိုင်လို့ မိတ်ဆွေတို့အနေနဲ့ မိမိကိုယ်တိုင်သာမက အခြားသူတွေကိုလည်း ရောဂါကူးစက်ခြင်းမခံရအောင် ပါးစပ်နဲ့ နှာခေါင်းစည်း mask ကိုသေချာစွာ စနစ်တကျ လုံခြုံအောင်တပ်ဆင်ဖို့ အသိပေးတိုက်တွန်းချင်ပါတယ်။

                    အသုံးပြုပီး mask တွေကိုလည်း အဖုံးပါတဲ့ အမှိုက်ပုံးထဲသို့ စနစ်တကျ စွန့်ပစ်ပေးဖို့ ဖြည့်စွက်ပြောကြားလိုပါတယ် ။
       

                </div>
                <div className="blog">
                    <h2>BLog</h2>
                    <p>
                        ညစ်ပတ် ပေါက် ပြဲမှု ရှိနေလျှင် အသုံးမပြုသင့်ပါ
Maskသည် နှာခေါင်း ပါးစပ် ကိုလုံခြုံစွာ အုပ်နေ ပြီး မျက်နှာနှင့်ကွတ်တိဖြစ်နေရပါမည်။

လျော့ရဲစွာ ဝတ်ဆင်ခြင်းမပြုသင့်ပါ
နှာခေါင်းအောက်သို့ မေးစေ့အောက်သို့ လျောချပြီး မဝတ်ဆင်သင့်ပါ။

Mask သည် ပေါက်ပြဲညစ်ပတ် စိုထိုင်းနေခြင်းမရှိလျှင် ပြန် အသုံးပြု၍ ရပါသည်။ အဝတ် Maskကို သန့်ရှင်းခြောက်သွေ့သောအိတ်တွင်ထည့်၍ သိမ်းထားပြီး ဆပ်ပြာရည်နှင့် တစ်နေ့တစ်ခါလျော်ဖွတ်၍ အသုံးပြုနိုင်ပါသည်။

မိမိ၏ Maskကိုအခြားသူများ ကိုပေးသုံးခြင်း မပြုသင့်ပါ။

အစာစားချိန်မှ လွဲ၍ maskကိုတပ်ဆင်ထားသင့်ပါသည်။


                    </p>
                </div>
            </div>
        )
    }
}